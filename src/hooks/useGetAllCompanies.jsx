import { setCompanies } from "@/redux/companySlice";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        if (res.data?.success) {
          dispatch(setCompanies(res.data?.companies));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCompanies();
  }, []);
};

export default useGetAllCompanies;
