import { useEffect, useState } from "react";
import useGetJobsListing from "../useGetJobsListing/useGetJobsListing";
import { LIMIT } from "../../constants";

const useJobSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { remoteDataState, fetchJobs, hasMore } = useGetJobsListing();

  const fetchMoreJobs = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchJobs({ offset: (currentPage - 1) * LIMIT });
  }, [currentPage]);

  return {
    remoteDataState,
    fetchMoreJobs,
    hasMore,
  };
};

export default useJobSearch;
