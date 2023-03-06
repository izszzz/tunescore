import React from "react";

import { useModal } from "@ebay/nice-modal-react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import type { Route } from "nextjs-routes";

export interface DefaultTabsProps {
  value: string;
  tabs: {
    label: "info" | "settings" | string;
    pathname: Route["pathname"];
    disabled?: boolean;
  }[];
}
const DefaultTabs = ({ value, tabs }: DefaultTabsProps) => {
  const router = useRouter(),
    { status } = useSession(),
    { show } = useModal("auth-dialog");

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs value={value}>
        {tabs.map(({ pathname, ...tab }, i) => (
          <Tab
            key={i}
            {...tab}
            value={tab.label}
            onClick={() => {
              if (tab.label === "settings" && status === "unauthenticated")
                return show();
              router.push({ pathname, query: router.query });
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};
export default DefaultTabs;
