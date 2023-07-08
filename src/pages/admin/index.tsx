import { useState } from "react";

import List from "@mui/material/List";
import { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import * as R from "remeda";

import DefaultHeader from "../../components/elements/header/default";
import ListItem from "../../components/elements/list/item";
import IndexLayout from "../../components/layouts/index";

const Admin: NextPage = () => {
  const [options, setOptions] = useState(R.values(Prisma.ModelName));
  return (
    <IndexLayout
      header={<DefaultHeader />}
      meta={{
        total: 0,
        lastPage: 0,
        currentPage: 0,
        perPage: 0,
        prev: null,
        next: null,
      }}
      searchAutocompleteProps={{
        options,
        onChange: (_e, v) => v && setOptions([v]),
      }}
    >
      <List>
        {options.map((option) => (
          <ListItem
            icon={undefined}
            key={option}
            listItemTextProps={{ primary: option }}
            href={{ pathname: "/admin/[id]", query: { id: option } }}
          />
        ))}
      </List>
    </IndexLayout>
  );
};

export default Admin;
