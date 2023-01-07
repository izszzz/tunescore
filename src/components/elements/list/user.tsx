import React from "react";
import UserListItem from "./item/user";
import Lists from ".";
import type { UserListItemProps } from "./item/user";
interface UserListProps {
  data: UserListItemProps["data"][];
}
const UserLists = ({ data }: UserListProps) => (
  <Lists data={data} listItem={(props) => <UserListItem data={props} />} />
);
export default UserLists;
