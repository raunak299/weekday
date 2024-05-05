import { Error, Loader } from "../../ccl";
import InfiniteScroll from "../../ccl/InfiniteScroll/InfiniteScroll";
import useJobSearch from "../../hooks/useJobSearch/useJobSearch";
import JobCard from "./JobCard/JobCard";
import "./SearchJob.css";

export default function SearchJob() {
  const { remoteDataState, fetchMoreJobs, hasMore } = useJobSearch();
  const loading = remoteDataState.loading || false;
  const message = remoteDataState.message;
  const error = remoteDataState.error || false;
  const jobs = remoteDataState.data;

  return (
    <InfiniteScroll
      fetchMore={fetchMoreJobs}
      listLength={jobs.length}
      loading={loading}
      loadingMsg={() => <Loader message={message} />}
      error={error}
      errorMsg={() => <Error message={message} />}
      hasMore={hasMore}
    >
      <div className="job-search-sec">
        {jobs.map((job) => (
          <div key={job.jdUid}>
            <JobCard {...job} key={job.jdUid} />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}
