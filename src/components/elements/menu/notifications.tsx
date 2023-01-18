import { useRouter } from "next/router";
import { match, P } from "ts-pattern";

import setLocale from "../../../helpers/locale";
import { trpc } from "../../../utils/trpc";
import NotificationsIconButton from "../button/icon/notification";

import BookmarkMenuListItem from "./item/bookmark";
import CommentMenuListItem from "./item/comment";
import FollowMenuListItem from "./item/follow";
import NoneMenuListItem from "./item/none";

import MenuManager from ".";

const NotificationsMenuManager = () => {
  const router = useRouter();
  const { data } = trpc.currentUser.notification.useQuery();
  if (!data) return <></>;
  return (
    <MenuManager
      button={(handleOpen) => <NotificationsIconButton onClick={handleOpen} />}
    >
      {(handleClose) =>
        data.length
          ? data.map((notification) => [
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
