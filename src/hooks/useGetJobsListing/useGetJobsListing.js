import { useState } from "react";
import { LIMIT } from "../../constants";

const useGetJobsListing = () => {
  const [remoteDataState, setRemoteDataState] = useState({
    data: [],
    loading: true,
    message: "Loading ...",
  });
  const [hasMore, setHasMore] = useState(true);

  const fetchJobs = async (params) => {
    const { offset } = params;
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
      setRemoteDataState({
        data: remoteDataState.data,
        loading: true,
        message: "Loading ...",
      });
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const data = await response.json();
      if (data.jdList.length === 0) {
        setHasMore(false);
      }
      setRemoteDataState({
        data: [...remoteDataState.data, ...data.jdList],
        success: true,
        message: "Success",
      });
    } catch (error) {
      setRemoteDataState({
        data: remoteDataState.data,
        error: true,
        message: "Something went wrong !!",
      });
    }
  };

  return {
    remoteDataState,
    fetchJobs,
    hasMore,
  };
};

export default useGetJobsListing;
