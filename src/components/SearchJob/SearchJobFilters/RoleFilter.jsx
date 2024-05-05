import { Dropdown } from "../../../ccl";
import { DROPDOWN_ROLES } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../../store/data-slice";

export default function RoleFilter() {
  const dispatch = useDispatch();
  const { roles } = useSelector((state) => state.dataStore);
  const onRoleChangeHandler = (_e, value) => {
    const roles = value?.map((role) => role.id);
    dispatch(
      dataActions.setRoleFilter({
        roles: roles || [],
      })
    );
  };
  return (
    <Dropdown
      options={DROPDOWN_ROLES}
      label="Roles"
      value={roles}
      fullWidth={true}
      multiple={true}
      onChange={onRoleChangeHandler}
      groupBy={(option) => option.group}
      getOptionLabel={(option) => option.label}
    />
  );
}
