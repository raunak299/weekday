import { Error, Loader } from "../../ccl";
import InfiniteScroll from "../../ccl/InfiniteScroll/InfiniteScroll";
import useJobSearch from "../../hooks/useJobSearch/useJobSearch";
import JobCard from "./JobCard/JobCard";
import "./SearchJob.css";
import SearchJobFilters from "./SearchJobFilters/SearchJobFilters";

export default function SearchJob() {
  const { remoteDataState, fetchMoreJobs, hasMore } = useJobSearch();
  const loading = remoteDataState.loading || false;
  const message = remoteDataState.message;
  const error = remoteDataState.error || false;
  const jobs = remoteDataState.data;

  return (
    <div className="search-job-sec">
      <SearchJobFilters />
      <InfiniteScroll
        fetchMore={fetchMoreJobs}
        listLength={jobs.length}
        loading={loading}
        loadingMsg={() => <Loader message={message} />}
        error={error}
        errorMsg={() => <Error message={message} />}
        hasMore={hasMore}
        classes={{ itemsSection: "infinite-scroll-content" }}
      >
        {jobs.map((job) => (
          <div key={job.jdUid}>
            <JobCard {...job} key={job.jdUid} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
