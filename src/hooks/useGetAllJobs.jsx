import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/getAllJobs`, {
          withCredentials: true,
        });
        if (res.data?.success) {
          console.log("zitu", res.data?.jobs);
          dispatch(setAllJobs(res.data?.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllJobs();
  }, [dispatch]);
};

export default useGetAllJobs;
