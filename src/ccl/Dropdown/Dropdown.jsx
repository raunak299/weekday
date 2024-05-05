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

  const onChangeHandler = (e, value) => {
    onChange && onChange(e, value);
  };

  return (
    <Autocomplete
      id={id}
      options={options}
      getOptionLabel={getOptionLabel}
      groupBy={groupBy}
      value={value}
      onChange={onChangeHandler}
      fullWidth={fullWidth}
      renderInput={(params) => {
        return <TextField {...params} label={label} />;
      }}
      multiple={multiple}
    />
  );
}
