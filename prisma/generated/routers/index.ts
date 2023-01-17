import { t } from "./helpers/createRouter";
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
import { cartsRouter } from "./Cart.router";
import { purchasesRouter } from "./Purchase.router";
import { pointsRouter } from "./Point.router";

export const appRouter = t.router({
  account: accountsRouter,
  session: sessionsRouter,
  user: usersRouter,
  follow: followsRouter,
  verificationtoken: verificationtokensRouter,
  music: musicRouter,
  album: albumsRouter,
  artist: artistsRouter,
  band: bandsRouter,
  issue: issuesRouter,
  pull: pullsRouter,
  vote: votesRouter,
  comment: commentsRouter,
  bookmark: bookmarksRouter,
  participation: participationsRouter,
  role: rolesRouter,
  rolemap: rolemapsRouter,
  tag: tagsRouter,
  tagmap: tagmapsRouter,
  notification: notificationsRouter,
  cart: cartsRouter,
  purchase: purchasesRouter,
  point: pointsRouter
})

