import { Dropdown } from "../../../ccl";
import { DROPDOWN_ROLES } from "../../../constants";

export default function RoleFilter() {
  const onRoleChangeHandler = (selectedRoles) => {};
  return (
    <Dropdown
      options={DROPDOWN_ROLES}
      label="Roles"
      fullWidth={true}
      multiple={true}
      onChange={onRoleChangeHandler}
      groupBy={(option) => option.group}
      getOptionLabel={(option) => option.label}
    />
  );
}
