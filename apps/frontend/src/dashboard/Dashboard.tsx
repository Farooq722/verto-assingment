import { useEffect } from "react";
import EmployeeData from "./EmployeeData";
import Navbar from "./navbar/Navbar";
import { useEmployeeData } from "@repo/zustand";
import axios from "axios";
import { RingLoader } from "react-spinners";

export default function Dashboard() {
  const { setAllEmployees, isLoading, setIsLoading } = useEmployeeData();

  useEffect(() => {
    setIsLoading(true);
    const fetchEmployess = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URI}/data/`
      );
      setAllEmployees(data.allEmployees);
    };
    setIsLoading(false);
    fetchEmployess();
  }, []);

  if (isLoading) {
    <div className="flex justify-center items-center">
      <RingLoader color="green" size={25} />
    </div>;
  }

  return (
    <div className="max-w-[85rem] mx-auto h-screen">
      <Navbar />
      <EmployeeData />
    </div>
  );
}
