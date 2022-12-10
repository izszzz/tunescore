import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Route } from "nextjs-routes";
import { useSession } from "next-auth/react";
import { useModal } from "../../../hooks/useModal";

export interface DefaultTabsProps {
  value: string;
  tabs: { label: string; href: Route; disabled?: boolean }[];
}
const DefaultTabs = ({ value, tabs }: DefaultTabsProps) => {
  const router = useRouter();
  const session = useSession();
  const { handleOpen } = useModal();
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs value={value}>
        {tabs.map(({ href, ...tab }, i) => (
          <Tab
            key={i}
            {...tab}
            value={tab.label}
            onClick={() => {
              if (tab.label === "settings" && !session.data?.user)
                return handleOpen();
              router.push(href);
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};
export default DefaultTabs;
