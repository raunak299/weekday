import CircularProgress from "@mui/material/CircularProgress";
import "./Loader.css";

export default function Loader({ message }) {
  return (
    <div className="loader-root">
      <CircularProgress sx={{ color: "rgba(85, 239, 196)" }} />
      <h2>{message}</h2>
    </div>
  );
}
