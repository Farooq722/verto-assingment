import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import Search from "./Search";
// import { useState } from "react";

export default function Navbar() {
  // const [open, setOpen] = useState(false);
  
  return (
    <div className=" bg-gradient from-sky-200 via-white to-sky-100 border border-gray-700 rounded-xl p-4 relative">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="flex items-center gap-3 px-2">
          <Search />
          <Button
            className="cursor-pointer px-6 py-5.5 hover:bg-gray-700"
            onClick={() => {}}
          >
            Add Employee
          </Button>
        </div>
      </div>
    </div>
  );
}
