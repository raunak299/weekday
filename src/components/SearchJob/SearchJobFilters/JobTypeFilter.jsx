import { Dropdown } from "../../../ccl";
import { DROPDOWN_JOB_TYPE } from "../../../constants";

export default function JobTypeFilter() {
  const onJobTypeChangeHandler = (selectedRoles) => {};
  return (
    <Dropdown
      options={DROPDOWN_JOB_TYPE}
      label="Remote"
      fullWidth={true}
      onChange={onJobTypeChangeHandler}
    />
  );
}
