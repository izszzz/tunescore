import React, { Fragment } from "react";

import List from "@mui/material/List";

interface ListsProps<T> {
  data: T[];
  listItem: (data: T) => React.ReactNode;
}
function Lists<T>({ data, listItem }: ListsProps<T>) {
  return (
    <List>
      {data.map((resource, i) => (
        <Fragment key={i}>{listItem(resource)}</Fragment>
      ))}
    </List>
  );
}
export default Lists;
