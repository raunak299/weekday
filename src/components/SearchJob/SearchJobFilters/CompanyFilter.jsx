import { Input } from "../../../ccl";

export default function CompanyFilter({ placeholder, onChange }) {
  const onCompanyChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return <Input placeholder={"Company"} onChange={onCompanyChangeHandler} />;
}
