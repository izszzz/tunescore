import React from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

interface ListsProps<T> {
  data: T[];
  listItem: (data: T) => React.ReactNode;
}
function Lists<T>({ data, listItem }: ListsProps<T>) {
  return (
    <List>
      {data.length ? <Divider component="li" /> : "No Data"}
      {data.map((resource) => (
        <>
          {listItem(resource)}
          <Divider component="li" />
        </>
      ))}
    </List>
  );
}
export default Lists;
