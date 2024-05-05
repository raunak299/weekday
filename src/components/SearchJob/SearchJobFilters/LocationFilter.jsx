import { Dropdown } from "../../../ccl";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../../store/data-slice";

export default function LocationFilter() {
  const dispatch = useDispatch();
  const { locationsList, locations } = useSelector((state) => state.dataStore);
  const onLocationChangeHandler = (_e, value) => {
    console.log("value", value);
    const locations = value?.map((location) => location.id);
    dispatch(
      dataActions.setLocationsFilter({
        locations: locations || [],
      })
    );
  };
  return (
    <Dropdown
      options={locationsList}
      label="Locations"
      value={locations}
      fullWidth={true}
      multiple={true}
      onChange={onLocationChangeHandler}
      groupBy={(option) => option.group}
      getOptionLabel={(option) => option.label}
    />
  );
}
