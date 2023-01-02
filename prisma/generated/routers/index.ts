import { createRouter } from "./helpers/createRouter";
import { accountsRouter } from "./Account.router";
import { sessionsRouter } from "./Session.router";
import { usersRouter } from "./User.router";
import { followsRouter } from "./Follow.router";
import { verificationtokensRouter } from "./VerificationToken.router";
import { musicRouter } from "./Music.router";
import { albumsRouter } from "./Album.router";
import { artistsRouter } from "./Artist.router";
import { bandsRouter } from "./Band.router";
import { issuesRouter } from "./Issue.router";
import { pullsRouter } from "./Pull.router";
import { votesRouter } from "./Vote.router";
import { commentsRouter } from "./Comment.router";
import { bookmarksRouter } from "./Bookmark.router";
import { participationsRouter } from "./Participation.router";
import { rolesRouter } from "./Role.router";
import { rolemapsRouter } from "./RoleMap.router";
import { tagsRouter } from "./Tag.router";
import { tagmapsRouter } from "./TagMap.router";
import { notificationsRouter } from "./Notification.router";

export const appRouter = createRouter()

  .merge('account.', accountsRouter)

  .merge('session.', sessionsRouter)

  .merge('user.', usersRouter)

  .merge('follow.', followsRouter)

  .merge('verificationtoken.', verificationtokensRouter)

  .merge('music.', musicRouter)

  .merge('album.', albumsRouter)

  .merge('artist.', artistsRouter)

  .merge('band.', bandsRouter)

  .merge('issue.', issuesRouter)

  .merge('pull.', pullsRouter)

  .merge('vote.', votesRouter)

  .merge('comment.', commentsRouter)

  .merge('bookmark.', bookmarksRouter)

  .merge('participation.', participationsRouter)

  .merge('role.', rolesRouter)

  .merge('rolemap.', rolemapsRouter)

  .merge('tag.', tagsRouter)

  .merge('tagmap.', tagmapsRouter)

  .merge('notification.', notificationsRouter)
