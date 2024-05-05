import CompanyFilter from "./CompanyFilter";
import JobTypeFilter from "./JobTypeFilter";
import MinimumBaseFilter from "./MinBaseFilter";
import MinExperienceFilter from "./MinExperienceFilter";
import RoleFilter from "./RoleFilter";
import "./SearchJobFilters.css";

export default function SearchJobFilters() {
  return (
    <section className="search-job-filter__sec">
      <div>
        <RoleFilter />
      </div>
      <div className="search-job-filter">
        <MinExperienceFilter />
      </div>
      <div className="search-job-filter">
        <JobTypeFilter />
      </div>
      <div className="search-job-filter">
        <MinimumBaseFilter />
      </div>
      <div className="search-job-filter">
        <CompanyFilter />
      </div>
    </section>
  );
}
