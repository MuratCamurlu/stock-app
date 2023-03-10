import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFail, getSuccess, fetchStart } from "../features/stockSlice";

const Firms = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const BASE_URL = "https://14136.fullstack.clarusway.com/";

  const getFirms = async () => {
    const url = "firms";
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
        headers: { Authorization: `Token ${token}` },
      });
      // console.log(data);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  useEffect(() => {
    getFirms();
  }, []);

  return <div>Firms</div>;
};

export default Firms;
