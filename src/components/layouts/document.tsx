import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { NextLinkComposed } from "../elements/link";
import ExpandListItem from "../elements/list/item/expand";

import DefaultSingleColumnLayout from "./single_column/default";

const DocumentLayout = () => {
  const router = useRouter(),
    Markdown = dynamic(
      () => import(`src/pages${router.pathname}/${router.locale}.mdx`)
    );
  return (
    <DefaultSingleColumnLayout>
      <Box sx={{ display: "flex" }}>
        <Drawer
          open
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 240,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
        >
          <Toolbar />
          <List>
            <ListItemButton component={NextLinkComposed} to="/docs">
              <ListItemText>Document</ListItemText>
            </ListItemButton>
            <ExpandListItem
              open={router.pathname.includes("getting-started")}
              primary="Getting Started"
            >
              <List>
                <ListItemButton
                  component={NextLinkComposed}
                  sx={{ pl: 4 }}
                  to="/docs/getting-started/create-music"
                >
                  <ListItemText>Create Music</ListItemText>
                </ListItemButton>
                <ListItemButton
                  component={NextLinkComposed}
                  sx={{ pl: 4 }}
                  to="/docs/getting-started/write-score"
                >
                  <ListItemText>Write Music</ListItemText>
                </ListItemButton>
              </List>
            </ExpandListItem>
            <ListItemButton component={NextLinkComposed} to="/docs/developer">
              <ListItemText>Developer</ListItemText>
            </ListItemButton>
            <ListItemButton component={NextLinkComposed} to="/docs/hakei-prod">
              <ListItemText>Hakei Prod.</ListItemText>
            </ListItemButton>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Markdown />
        </Box>
      </Box>
    </DefaultSingleColumnLayout>
  );
};

export default DocumentLayout;
