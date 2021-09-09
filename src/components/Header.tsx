import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { useAuth } from "../contexts/auth-context/authContext";

function Header() {
  const { currentUser } = useAuth();

  return (
    <div>
      <div className="flex justify-between items-center h-20">
        <div className="px-3 py-2.5 bg-green-500 text-white rounded-full">
          RQuiz
        </div>
      </div>
    </div>
  );
}

export default Header;
