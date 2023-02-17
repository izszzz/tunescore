import React from "react";

import TransactionListItem from "./item/transaction";
import type { TransactionListItemProps } from "./item/transaction";

import Lists from ".";
interface TransactionListProps {
  data: TransactionListItemProps["data"][];
}
const TransactionLists = ({ data }: TransactionListProps) => (
  <Lists
    data={data}
    listItem={(props) => <TransactionListItem data={props} />}
  />
);
export default TransactionLists;
