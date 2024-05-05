import { useEffect, useState } from "react";
import useGetJobsListing from "../useGetJobsListing/useGetJobsListing";
import { LIMIT } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../../store/data-slice";

const useJobSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { fetchJobs, hasMore } = useGetJobsListing();

  const dispatch = useDispatch();
  const { filters } = useSelector((store) => store.dataStore);

  const fetchMoreJobs = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchJobs({ offset: (currentPage - 1) * LIMIT });
  }, [currentPage]);

  useEffect(() => {
    dispatch(dataActions.setFilteredJobs({ filters }));
  }, [filters]);

  return {
    fetchMoreJobs,
    hasMore,
  };
};

export default useJobSearch;
