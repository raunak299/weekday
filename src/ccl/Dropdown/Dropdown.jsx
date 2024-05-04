import { Autocomplete, TextField } from "@mui/material";
import "./Dropdown.css";

export default function Dropdown(props) {
  const {
    options,
    id,
    label,
    value,
    onChange,
    fullWidth = false,
    getOptionLabel,
    groupBy,
    multiple = false,
  } = props;

  return (
    <Autocomplete
      id={id}
      options={options}
      getOptionLabel={getOptionLabel}
      groupBy={groupBy}
    //   limitTags={1}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      renderInput={(params) => {
        console.log("params", params);
        return <TextField {...params} label={label} />;
      }}
      multiple={multiple}
    />
  );
}
