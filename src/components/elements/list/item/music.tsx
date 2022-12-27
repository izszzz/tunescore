import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import ListItemIcon from "@mui/material/ListItemIcon";
import setLocale from "../../../../helpers/setLocale";
import ResourceIcon from "../../icon/resource";
import musicOwner from "../../../../helpers/musicOwner";
import BookmarkToggleButton from "../../button/toggle/bookmark";
import { trpc } from "../../../../utils/trpc";
import { selectSuitableStreamingImage } from "../../../../helpers/selectSuitableImage";
import type { Prisma } from "@prisma/client";
import { useQueryClient } from "react-query";
import { useSnackbar } from "notistack";

export interface MusicListItemProps {
  data: Prisma.MusicGetPayload<{
    include: {
      user: true;
      composers: true;
      lyrists: true;
      band: true;
      artists: true;
      bookmarks: true;
    };
  }>;
}
const MusicListItem = ({ data }: MusicListItemProps) => {
  const router = useRouter();
  const session = useSession();
  const update = trpc.useMutation(["music.updateOneMusic"]);
  return (
    <ListItem
      disablePadding
      onClick={() =>
        router.push({ pathname: "/musics/[id]", query: { id: data.id } })
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <ResourceIcon resource="music" />
        </ListItemIcon>
        <ListItemText
          primary={
            <Box component="span" display="flex" alignItems="center">
              <Typography variant="h6" mr={3}>
                {setLocale(data.title, router)}
              </Typography>
              <Chip component="span" label={data.type} size="small" />
              <BookmarkToggleButton
                value={!!data.bookmarks.length}
                disabled={update.isLoading}
                onClick={(value) =>
                  update.mutate({
                    where: { id: router.query.id as string },
                    data: {
                      bookmarks: {
                        [value ? "delete" : "create"]: {
                          resourceType: "Music",
                          music: { connect: data.id },
                          user: { connect: session.data?.user?.id },
                        },
                      },
                    },
                  })
                }
              />
            </Box>
          }
          secondary={<Owner data={data} />}
        />
        {data.link?.streaming && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            width="60"
            height="60"
            alt={setLocale(data.title, router) || ""}
            src={
              selectSuitableStreamingImage(data.link.streaming)?.image?.size
                ?.medium || ""
            }
            style={{ borderRadius: 3 }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};

const Owner = ({ data }: MusicListItemProps) => {
  const router = useRouter();
  const { type, owner } = musicOwner(data, router);
  if (type === "none" || owner === null) return <>no info</>;
  return (
    <Box component="span" display="flex" alignItems="center">
      <Typography
        mr={1}
        variant="body2"
        color="text.subprimary"
        component="span"
      >
        {owner.name}
      </Typography>
      <ResourceIcon resource={type} />
    </Box>
  );
};

export default MusicListItem;
