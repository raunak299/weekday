import { useEffect, useState } from "react";
import useGetJobsListing from "../useGetJobsListing/useGetJobsListing";
import { LIMIT } from "../../constants";

const useJobSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMoreJobs = () => {
    setCurrentPage(currentPage + 1);
  };

  const { remoteDataState, fetchJobs } = useGetJobsListing();

  useEffect(() => {
    fetchJobs(currentPage - 1 * LIMIT);
  }, [currentPage]);

  return {
    remoteDataState,
    fetchMoreJobs,
  };
};

export default useJobSearch;
