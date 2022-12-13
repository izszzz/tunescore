import React from "react";
import Lists from "./";
import UserListItem, { UserListItemProps } from "./item/user";
interface UserListProps {
  data: UserListItemProps["data"][];
}
const UserLists = ({ data }: UserListProps) => (
  <Lists data={data} listItem={(props) => <UserListItem data={props} />} />
);
export default UserLists;
