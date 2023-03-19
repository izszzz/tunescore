import React from "react";

import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { match, P } from "ts-pattern";

import setLocale from "../../../../helpers/locale";
import type { NotificationArgsType } from "../../../../paths/dashboard/notifications";
import BookmarkMenuListItem from "../item/bookmark";
import CommentMenuListItem from "../item/comment";
import FollowMenuListItem from "../item/follow";
import NoneMenuListItem from "../item/none";

const NotificationMenuList = ({
  data,
}: {
  data: Prisma.NotificationGetPayload<NotificationArgsType>[];
}) => {
  const router = useRouter();
  return (
    <>
      {data.map((notification) =>
        match(notification)
          .with(
            {
              unionType: "Bookmark",
              bookmarked: {
                resource: P.select("resource", P.not(P.nullish)),
              },
              user: P.select("user", P.not(P.nullish)),
            },
            ({ resource: { name }, user }) => (
              <BookmarkMenuListItem>
                {setLocale(name, router)} bookmarked by {user.name}
              </BookmarkMenuListItem>
            )
          )
          .with(
            {
              unionType: "Follow",
              user: P.select("user", P.not(P.nullish)),
            },
            ({ user }) => (
              <FollowMenuListItem>followed by {user.name}</FollowMenuListItem>
            )
          )
          .with(
            {
              unionType: "Comment",
              user: P.select("user", P.not(P.nullish)),
            },
            ({ user }) => (
              <CommentMenuListItem>
                commented by {user.name}
              </CommentMenuListItem>
            )
          )
          .otherwise(() => <NoneMenuListItem />)
      )}
    </>
  );
};
export default NotificationMenuList;
