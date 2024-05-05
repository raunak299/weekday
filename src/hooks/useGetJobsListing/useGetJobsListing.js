import { useState } from "react";
import { LIMIT } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../../store/data-slice";

const useGetJobsListing = () => {
  console.log();
  const { jobs, filters } = useSelector((store) => store.dataStore);
  const dispatch = useDispatch();

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
      dispatch(
        dataActions.setRemoteDataState({
          data: jobs,
          loading: true,
          message: "Loading ...",
        })
      );
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const data = await response.json();
      if (data.jdList.length === 0) {
        setHasMore(false);
      }
      dispatch(
        dataActions.setRemoteDataState({
          data: [...jobs, ...data.jdList],
          success: true,
          message: "Success",
        })
      );
      dispatch(dataActions.setFilteredJobs({ filters }));
    } catch (error) {
      dispatch(
        dataActions.setRemoteDataState({
          data: jobs,
          error: true,
          message: "Something went wrong !!",
        })
      );
    }
  };

  return {
    fetchJobs,
    hasMore,
  };
};

export default useGetJobsListing;
