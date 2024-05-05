import { Dropdown } from "../../../ccl";
import { DROPDOWN_MIN_BASE_PAY } from "../../../constants";
import { useDispatch } from "react-redux";
import { dataActions } from "../../../store/data-slice";

export default function MinimumBaseFilter() {
  const dispatch = useDispatch();
  const onMinBaseChangeHandler = (_e, value) => {
    const minBaseSalary = value?.id || 0;
    dispatch(
      dataActions.setMinBaseSalaryFilter({
        minBaseSalary: minBaseSalary,
      })
    );
  };
  return (
    <Dropdown
      options={DROPDOWN_MIN_BASE_PAY}
      label="Minimum Base Salary"
      fullWidth={true}
      onChange={onMinBaseChangeHandler}
    />
  );
}
