import React from "react";
import IssueListItem from "./item/issue";
import Lists from ".";
import type { IssueListItemProps } from "./item/issue";
interface IssueListProps {
  data: IssueListItemProps["data"][];
}
const IssueLists = ({ data }: IssueListProps) => (
  <Lists data={data} listItem={(props) => <IssueListItem data={props} />} />
);
export default IssueLists;
