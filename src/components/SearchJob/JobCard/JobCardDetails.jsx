import "./JobCardDetails.css";

export default function JobCardDetails({ jobDetailsFromCompany }) {
  return (
    <div className="job-card-details__body">
      <h3 className="job-card-details__about-sec-title">About Company:</h3>
      <strong className="job-card-details__about-sec-subtitle">About us</strong>
      {jobDetailsFromCompany && (
        <p className="job-card-details__about-sec-details">
          {jobDetailsFromCompany}
        </p>
      )}
    </div>
  );
}
