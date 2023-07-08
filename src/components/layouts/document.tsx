import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

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
            <ListItemButton component={Link} href="/docs">
              <ListItemText>Document</ListItemText>
            </ListItemButton>
            <ExpandListItem
              open={router.pathname.includes("getting-started")}
              primary="Getting Started"
            >
              <List>
                <ListItemButton
                  component={Link}
                  href="/docs/getting-started/create-music"
                  sx={{ pl: 4 }}
                >
                  <ListItemText>Create Music</ListItemText>
                </ListItemButton>
                <ListItemButton
                  component={Link}
                  href="/docs/getting-started/write-score"
                  sx={{ pl: 4 }}
                >
                  <ListItemText>Write Music</ListItemText>
                </ListItemButton>
              </List>
            </ExpandListItem>
            <ListItemButton component={Link} href="/docs/developer">
              <ListItemText>Developer</ListItemText>
            </ListItemButton>
            <ListItemButton component={Link} href="/docs/hakei-prod">
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
