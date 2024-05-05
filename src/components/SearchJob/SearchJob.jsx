import { Error, Loader } from "../../ccl";
import InfiniteScroll from "../../ccl/InfiniteScroll/InfiniteScroll";
import useJobSearch from "../../hooks/useJobSearch/useJobSearch";
import JobCard from "./JobCard/JobCard";
import "./SearchJob.css";
import SearchJobFilters from "./SearchJobFilters/SearchJobFilters";
import { useSelector } from "react-redux";

export default function SearchJob() {
  const { filteredJobs, loading, error, message } = useSelector(
    (state) => state.dataStore
  );
  const { fetchMoreJobs, hasMore } = useJobSearch();

  return (
    <div className="search-job-sec">
      <SearchJobFilters />
      {filteredJobs.length > 0 && (
        <InfiniteScroll
          fetchMore={fetchMoreJobs}
          listLength={filteredJobs.length}
          loading={loading}
          loadingMsg={() => <Loader message={message} />}
          error={error}
          errorMsg={() => <Error message={message} />}
          hasMore={hasMore}
          classes={{ itemsSection: "infinite-scroll-content" }}
        >
          {filteredJobs.map((job) => (
            <div key={job.jdUid}>
              <JobCard {...job} key={job.jdUid} />
            </div>
          ))}
        </InfiniteScroll>
      )}
      {!filteredJobs.length > 0 && <h2 className="no-jobs">No Jobs Found</h2>}
    </div>
  );
}
