import { Dropdown } from "../../../ccl";
import { DROPDOWN_JOB_TYPE } from "../../../constants";
import { useDispatch } from "react-redux";
import { dataActions } from "../../../store/data-slice";

export default function JobTypeFilter() {
  const dispatch = useDispatch();
  const onJobTypeChangeHandler = (_e, value) => {
    dispatch(
      dataActions.setJobTypeFilter({
        jobType: value?.id || "",
      })
    );
  };
  return (
    <Dropdown
      options={DROPDOWN_JOB_TYPE}
      label="Remote"
      fullWidth={true}
      onChange={onJobTypeChangeHandler}
    />
  );
}
