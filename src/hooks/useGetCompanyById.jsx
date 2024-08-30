import { setSingleCompany } from "@/redux/companySlice";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetCompanyById = (companyId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleCompany = async () => {
      try {
        const res = await axios.get(
          `${COMPANY_API_END_POINT}/get/${companyId}`,
          {
            withCredentials: true,
            headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
          }
        );
        if (res.data?.success) {
          dispatch(setSingleCompany(res.data?.company));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleCompany();
  }, [dispatch, companyId]);
};

export default useGetCompanyById;
