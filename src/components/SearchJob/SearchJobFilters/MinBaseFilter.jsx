import { Dropdown } from "../../../ccl";
import { DROPDOWN_MIN_BASE_PAY } from "../../../constants";

export default function MinimumBaseFilter() {
  const onMinBaseChangeHandler = (selectedRoles) => {};
  return (
    <Dropdown
      options={DROPDOWN_MIN_BASE_PAY}
      label="Minimum Base Salary"
      fullWidth={true}
      onChange={onMinBaseChangeHandler}
    />
  );
}
