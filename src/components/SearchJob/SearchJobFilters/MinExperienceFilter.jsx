import { Dropdown } from "../../../ccl";
import { DROPDOWN_MIN_EXPERIENCE } from "../../../constants";

export default function MinExperienceFilter() {
  const onMinExpChangeHandler = (selectedRoles) => {};

  return (
    <Dropdown
      options={DROPDOWN_MIN_EXPERIENCE}
      label="Experience"
      fullWidth={true}
      onChange={onMinExpChangeHandler}
    />
  );
}
