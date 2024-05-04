import { useState } from "react";
import { LIMIT } from "../../constants";

const useGetJobsListing = () => {
  const [remoteDataState, setRemoteDataState] = useState({
    data: [],
    loading: true,
    message: "Loading ...",
  });

  const fetchJobs = async ({ offset }) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: LIMIT,
      offset: offset || 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const data = await response.json();
      console.log("data", data);
      setRemoteDataState({
        data: data.jdList,
        success: "Success",
      });
    } catch (error) {
      setRemoteDataState({
        error: true,
        message: "Something went wrong ..",
      });
    }
  };

  return {
    remoteDataState,
    fetchJobs,
  };
};

export default useGetJobsListing;
