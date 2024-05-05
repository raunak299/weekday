import { Input } from "../../../ccl";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../../store/data-slice";

export default function CompanyFilter({ placeholder, onChange }) {
  const dispatch = useDispatch();
  const { companyName } = useSelector((state) => state.dataStore);

  const onCompanyChangeHandler = (value) => {
    const company = value;
    dispatch(
      dataActions.setCompanyNameFilter({
        companyName: company,
      })
    );
  };

  return (
    <Input
      placeholder={"Company"}
      onChange={onCompanyChangeHandler}
      value={companyName}
    />
  );
}
