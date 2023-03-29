import React from "react";

import { useModal } from "@ebay/nice-modal-react";
import LocalOffer from "@mui/icons-material/LocalOffer";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { Prisma, ResourceUnionType } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import { getImage } from "../../../helpers/image";
import setLocale from "../../../helpers/locale";
import FlagIconButton from "../../elements/button/icon/flag";
import type { BookmarkToggleIconButtonProps } from "../../elements/button/icon/toggle/bookmark";
import BookmarkToggleButton from "../../elements/button/icon/toggle/bookmark";
import LinkButtons from "../../elements/button/link";
import Footer from "../../elements/footer";
import DefaultHeader from "../../elements/header/default";
import Image from "../../elements/image";

import ShowLayout from ".";
import type { ShowLayoutProps } from ".";

export interface ResourceShowLayoutProps
  extends Omit<ShowLayoutProps, "title"> {
  bookmarkToggleButtonProps: Omit<BookmarkToggleIconButtonProps, "value">;
  type: ResourceUnionType;
  resource: Prisma.ResourceGetPayload<{
    include: {
      name: true;
      links: true;
      tags: true;
      bookmarks: true;
    };
  }>;
  icon: React.ReactNode;
  title?: React.ReactNode;
}

const DefaultShowLayout = ({
  bookmarkToggleButtonProps,
  resource,
  type,
  title,
  icon,
  ...props
}: ResourceShowLayoutProps) => {
  const router = useRouter(),
    { show } = useModal("report-dialog"),
    {
      query: { id },
    } = router,
    name = setLocale(resource.name, router),
    image = getImage(resource.links, 80, { channel: true });
  return (
    <ShowLayout
      {...props}
      footer={<Footer />}
      header={<DefaultHeader />}
      title={
        <Box mx={3}>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
          >
            <Box alignItems="center" display="flex">
              <IconButton
                onClick={() =>
                  router.push({ pathname: "/search", query: { type } })
                }
              >
                {icon}
              </IconButton>
              {title ?? (
                <>
                  <Typography variant="h5">
                    {setLocale(resource.name, router)}
                  </Typography>
                  {image && (
                    <Box display="flex" justifyContent="center" pl={3}>
                      <Image
                        alt={name}
                        height="80"
                        src={image}
                        style={{ borderRadius: 5 }}
                      />
                    </Box>
                  )}
                </>
              )}
            </Box>
            <Box>
              <BookmarkToggleButton
                {...bookmarkToggleButtonProps}
                value={isNonEmpty(resource.bookmarks)}
              />
              <FlagIconButton onClick={() => show({ unionType: type, id })} />
            </Box>
          </Box>
          <Stack direction="row" spacing={1}>
            {resource.tags.map((tag) => (
              <Chip
                icon={<LocalOffer />}
                key={tag.id}
                label={tag.name}
                size="small"
                variant="outlined"
              />
            ))}
          </Stack>
          <LinkButtons data={resource.links} type={type} />
        </Box>
      }
    />
  );
};

export default DefaultShowLayout;