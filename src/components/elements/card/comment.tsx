import React from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import type { Prisma } from "@prisma/client";
import dynamic from "next/dynamic";

import type { userArgs } from "../../../helpers/user";

const Markdown = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});
interface CommentCardProps {
  data: Prisma.CommentGetPayload<{
    include: { user: typeof userArgs };
  }>;
}
const CommentCard = ({ data: { body, user } }: CommentCardProps) => (
  <Box display="flex">
    <Avatar src={user.image || ""} />
    <Box flexGrow={1}>
      <Card variant="outlined">
        <CardContent>
          <Markdown source={body} />
        </CardContent>
      </Card>
    </Box>
  </Box>
);

export default CommentCard;
