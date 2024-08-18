import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium">
          No. 1 Job Hunt Platform
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#6a38c2]">Dream Job</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          eligendi omnis excepturi?
        </p>
        <div className="flex items-center mx-auto shadow-lg border border-gray-200 rounded-full gap-4 pl-3 w-[40%]">
          <input
            type="text"
            placeholder="FInd your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="w-full outline-none border-none"
          />
          <Button onClick={searchJobHandler} className="rounded-r-full">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
