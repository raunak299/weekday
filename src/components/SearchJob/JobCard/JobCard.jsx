import { Button } from "../../../ccl";
import BoltIcon from "@mui/icons-material/Bolt";
import "./JobCard.css";
import { formatSalaryText } from "../../../utils";
import Modal from "../../../ccl/Modal/Modal";
import JobCardDetails from "./JobCardDetails";
import ClearIcon from "@mui/icons-material/Clear";

export default function JobCard(props) {
  const {
    companyName,
    jobRole,
    location,
    logoUrl,
    minJdSalary,
    maxJdSalary,
    salaryCurrencyCode,
    jobDetailsFromCompany,
    jdLink,
    minExp,
  } = props;

  return (
    <div className="job-card">
      <div className="job-card__header">
        <img
          src={logoUrl}
          alt="company logo"
          className="job-card__company-img"
        />
        <div className="job-card__job-summary">
          {companyName && (
            <h2 className="job-card__company-name">{companyName}</h2>
          )}
          {jobRole && <p className="job-card__company-job-role">{jobRole}</p>}
          {location && (
            <p className="job-card__company-job-location">{location}</p>
          )}
        </div>
      </div>
      <h3 className="job-card__est-salary">
        {`Estimated Salary: ${formatSalaryText(
          minJdSalary,
          maxJdSalary,
          salaryCurrencyCode
        )}`}
      </h3>
      <div className="job-card__body">
        <h3 className="job-card__about-sec-title">About Company:</h3>
        <strong className="job-card__about-sec-subtitle">About us</strong>
        {jobDetailsFromCompany && (
          <p className="job-card__about-sec-details">{jobDetailsFromCompany}</p>
        )}
      </div>
      {jobDetailsFromCompany && (
        <Modal
          modalCloseBtn={<ClearIcon />}
          modalButton={() => (
            <a
              target="_blank"
              rel="noreferrer"
              className="job-card__view-job-btn"
            >
              View Job
            </a>
          )}
          modalContent={() => (
            <JobCardDetails jobDetailsFromCompany={jobDetailsFromCompany} />
          )}
        />
      )}
      <div className="job-card__footer">
        {minExp && (
          <h3 className="job-card__footer-min-exp">Minimum Experience</h3>
        )}
        {minExp && (
          <h2 className="job-card__footer-min-exp-value">{`${minExp} years`}</h2>
        )}
        <Button
          label="Easy Apply"
          icon={<BoltIcon sx={{ color: "#ffc83d" }} />}
          onClick={() => jdLink && window.open(jdLink, "_blank")}
        />
      </div>
    </div>
  );
}
