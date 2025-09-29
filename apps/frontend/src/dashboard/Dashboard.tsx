import { useEffect } from "react";
import EmployeeData from "./EmployeeData";
import Navbar from "./navbar/Navbar";
import { useEmployeeData } from "@repo/zustand";
import axios from "axios";
import { RingLoader } from "react-spinners";

export default function Dashboard() {
  const { setAllEmployees, isLoading, setIsLoading } = useEmployeeData();

  console.log("isloading ", isLoading);
  useEffect(() => {
    const fetchEmployess = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URI}/data/`,
      );
      console.log("data", data);
      setAllEmployees(data.allEmployees);
      setIsLoading(false);
      console.log("isLoading", isLoading);
    };
    fetchEmployess();
  }, []);

  return (
    <div className="max-w-[85rem] mx-auto h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <RingLoader color="blue" size={35} />
        </div>
      ) : (
        <div>
          <Navbar />
          <EmployeeData />
        </div>
      )}
    </div>
  );
}
