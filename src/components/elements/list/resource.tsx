import React from "react";

import type { ResourceListItemProps } from "./item/resource";
import ResourceListItem from "./item/resource";

import Lists from ".";
interface ResourceListProps {
  data: ResourceListItemProps["data"][];
}
const ResourceLists = ({ data }: ResourceListProps) => (
  <Lists data={data} listItem={(props) => <ResourceListItem data={props} />} />
);
export default ResourceLists;
