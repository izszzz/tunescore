import React from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

interface IssueListProps {
  issues: Prisma.IssueGetPayload<{
    include: {
      user: true;
    };
  }>[];
}
const IssueList = ({ issues }: IssueListProps) => {
  const router = useRouter();
  return (
    <List>
      <Divider component="li" />
      {issues.map((issue) => (
        <React.Fragment key={issue.id}>
          <ListItem
            disablePadding
            onClick={() =>
              router.push({
                pathname: "/musics/[id]/issues/[issueId]",
                query: { id: router.query.id as string, issueId: issue.id },
              })
            }
          >
            <ListItemButton>
              <ListItemText
                primary={issue.title}
                secondary={
                  <Box display="flex" alignItems="center">
                    <Typography mr={1} variant="body2" color="text.subprimary">
                      created by {issue.user.name}
                    </Typography>
                    <Avatar
                      src={issue.user.image || ""}
                      sx={{ width: 24, height: 24 }}
                    />
                  </Box>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default IssueList;
