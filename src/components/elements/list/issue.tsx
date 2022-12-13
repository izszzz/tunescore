import React from "react";
import IssueListItem, { IssueListItemProps } from "./item/issue";
import Lists from ".";
interface IssueListProps {
  data: IssueListItemProps["data"][];
}
const IssueLists = ({ data }: IssueListProps) => (
  <Lists data={data} listItem={(props) => <IssueListItem data={props} />} />
);
export default IssueLists;
