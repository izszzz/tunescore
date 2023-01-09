import { useSession } from "next-auth/react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Error from "@mui/icons-material/Error";
import Bookmark from "@mui/icons-material/Bookmark";
import PersonAdd from "@mui/icons-material/PersonAdd";
import QuestionAnswer from "@mui/icons-material/QuestionAnswer";
import { match, P } from "ts-pattern";
import { useRouter } from "next/router";
import NotificationsIconButton from "../button/icon/notification";
import { trpc } from "../../../utils/trpc";
import setLocale from "../../../helpers/locale";
import { getCurrentUserId } from "../../../helpers/user";
import MenuManager from ".";
import type { Prisma } from "@prisma/client";

const NotificationsMenuManager = () => {
  const session = useSession();
  const userId = getCurrentUserId(session);
  const router = useRouter();
  const { data } = trpc.useQuery([
    "notification.findManyNotification",
    {
      where: {
        OR: [
          {
            bookmarked: {
              music: {
                user: {
                  id: userId,
                },
              },
            },
          },
          {
            followed: {
              follower: {
                id: userId,
              },
            },
          },
          {
            commented: {
              issue: {
                id: userId,
              },
            },
          },
          {
            commented: {
              pull: {
                id: userId,
              },
            },
          },
        ],
      },
      include: {
        bookmarked: {
          include: {
            music: true,
          },
        },
        user: true,
      },
    },
  ]);
  if (!data) return <></>;
  const notificationsData = data as Prisma.NotificationGetPayload<{
    include: {
      bookmarked: {
        include: {
          music: true;
        };
      };
      user: true;
    };
  }>[];
  return (
    <MenuManager
      button={(handleOpen) => <NotificationsIconButton onClick={handleOpen} />}
    >
      {(handleClose) =>
        notificationsData.length
          ? notificationsData.map((notification) => [
              <MenuItem key={notification.id} onClick={handleClose}>
                {match(notification)
                  .with(
                    {
                      resourceType: "Bookmark",
                      bookmarked: {
                        music: P.select("music", P.not(P.nullish)),
                      },
                      user: P.select("user", P.not(P.nullish)),
                    },
                    ({ music, user }) => (
                      <>
                        <ListItemIcon>
                          <Bookmark />
                        </ListItemIcon>
                        <ListItemText>
                          {setLocale(music.title, router)} bookmarked by{" "}
                          {user.name}
                        </ListItemText>
                      </>
                    )
                  )
                  .with(
                    {
                      resourceType: "Follow",
                      user: P.select("user", P.not(P.nullish)),
                    },
                    ({ user }) => (
                      <>
                        <ListItemIcon>
                          <PersonAdd />
                        </ListItemIcon>
                        <ListItemText>followed by {user.name}</ListItemText>
                      </>
                    )
                  )
                  .with(
                    {
                      resourceType: "Comment",
                      user: P.select("user", P.not(P.nullish)),
                    },
                    ({ user }) => (
                      <>
                        <ListItemIcon>
                          <QuestionAnswer />
                        </ListItemIcon>
                        <ListItemText>commented by {user.name}</ListItemText>
                      </>
                    )
                  )
                  .otherwise(() => (
                    <MenuItem key="none">
                      <ListItemIcon>
                        <Error fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>No data</ListItemText>
                    </MenuItem>
                  ))}
              </MenuItem>,
            ])
          : [
              <MenuItem key="none">
                <ListItemIcon>
                  <Error fontSize="small" />
                </ListItemIcon>
                <ListItemText>No data</ListItemText>
              </MenuItem>,
            ]
      }
    </MenuManager>
  );
};
export default NotificationsMenuManager;
