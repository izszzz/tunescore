import { useSession } from "next-auth/react";
import { match, P } from "ts-pattern";
import { useRouter } from "next/router";
import NotificationsIconButton from "../button/icon/notification";
import { trpc } from "../../../utils/trpc";
import setLocale from "../../../helpers/locale";
import { getCurrentUserId } from "../../../helpers/user";
import NoneMenuListItem from "./item/none";
import BookmarkMenuListItem from "./item/bookmark";
import FollowMenuListItem from "./item/follow";
import CommentMenuListItem from "./item/comment";
import MenuManager from ".";
import type { Prisma } from "@prisma/client";

const NotificationsMenuManager = () => {
  const session = useSession();
  const userId = getCurrentUserId(session);
  const router = useRouter();
  const { data } = trpc.notification.findManyNotification.useQuery({
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
          });
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
              match(notification)
                .with(
                  {
                    resourceType: "Bookmark",
                    bookmarked: {
                      music: P.select("music", P.not(P.nullish)),
                    },
                    user: P.select("user", P.not(P.nullish)),
                  },
                  ({ music, user }) => (
                    <BookmarkMenuListItem onClick={handleClose}>
                      {setLocale(music.title, router)} bookmarked by {user.name}
                    </BookmarkMenuListItem>
                  )
                )
                .with(
                  {
                    resourceType: "Follow",
                    user: P.select("user", P.not(P.nullish)),
                  },
                  ({ user }) => (
                    <FollowMenuListItem onClick={handleClose}>
                      followed by {user.name}
                    </FollowMenuListItem>
                  )
                )
                .with(
                  {
                    resourceType: "Comment",
                    user: P.select("user", P.not(P.nullish)),
                  },
                  ({ user }) => (
                    <CommentMenuListItem onClick={handleClose}>
                      commented by {user.name}
                    </CommentMenuListItem>
                  )
                )
                .otherwise(() => <NoneMenuListItem onClick={handleClose} />),
            ])
          : [<NoneMenuListItem key="none" onClick={handleClose} />]
      }
    </MenuManager>
  );
};
export default NotificationsMenuManager;
