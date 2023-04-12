import React from "react";

import AttachMoney from "@mui/icons-material/AttachMoney";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";

import setLocale from "../../../../helpers/locale";
import type { TransactionArgsType } from "../../../../helpers/transaction";

import ListItem from ".";

export interface TransactionListItemProps {
  data: Prisma.TransactionGetPayload<{
    include: TransactionArgsType;
  }>;
}

const TransactionListItem = ({ data }: TransactionListItemProps) => {
  const router = useRouter();
  return (
    <ListItem
      icon={<AttachMoney />}
      listItemTextProps={{
        primary: `${data.type} ${
          data.music ? setLocale(data.music.resource.name, router) : ""
        }`,
        secondary: (
          <Box alignItems="center" component="span" display="flex">
            <Typography color="text.subprimary" mr={1} variant="body2">
              created by {data.user.name}
            </Typography>
            <Avatar
              component="span"
              src={data.user.image || ""}
              sx={{ width: 24, height: 24 }}
            />
          </Box>
        ),
      }}
      to={{
        pathname: "/dashboard/transactions/[id]",
        query: { id: data.id },
      }}
    />
  );
};

export default TransactionListItem;
