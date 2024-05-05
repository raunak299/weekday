import { Dropdown } from "../../../ccl";
import { DROPDOWN_MIN_EXPERIENCE } from "../../../constants";
import { useDispatch } from "react-redux";
import { dataActions } from "../../../store/data-slice";

export default function MinExperienceFilter() {
  const dispatch = useDispatch();

  const onMinExpChangeHandler = (_e, value) => {
    const minExperience = value?.id || 0;
    dispatch(
      dataActions.setMinExperienceFilter({
        minExperience: minExperience,
      })
    );
  };

  return (
    <Dropdown
      options={DROPDOWN_MIN_EXPERIENCE}
      label="Experience"
      fullWidth={true}
      onChange={onMinExpChangeHandler}
    />
  );
}
