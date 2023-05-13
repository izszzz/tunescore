import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";
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
  const router = useRouter(),
    { data } = trpc.currentUser.findManyNotification.useQuery();
  if (!data) return null;
  return (
    <MenuManager
      button={(handleOpen) => <NotificationsIconButton onClick={handleOpen} />}
    >
      {(handleClose) =>
        isNonEmpty(data)
          ? data.map((notification) => [
              match(notification)
                .with(
                  {
                    unionType: "Bookmark",
                    bookmarked: {
                      resource: P.select("resource", P.not(P.nullish)),
                    },
                    user: P.select("user", P.not(P.nullish)),
                  },
                  ({ resource, user }) => (
                    <BookmarkMenuListItem onClick={handleClose}>
                      {setLocale(resource.name, router)} bookmarked by{" "}
                      {user.name}
                    </BookmarkMenuListItem>
                  )
                )
                .with(
                  { unionType: "Follow", user: P.select(P.not(P.nullish)) },
                  (user) => (
                    <FollowMenuListItem onClick={handleClose}>
                      followed by {user.name}
                    </FollowMenuListItem>
                  )
                )
                .with(
                  { unionType: "Comment", user: P.select(P.not(P.nullish)) },
                  (user) => (
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
