import { createRouter } from "./helpers/createRouter";
import { accountsRouter } from "./Account.router";
import { sessionsRouter } from "./Session.router";
import { usersRouter } from "./User.router";
import { notificationsRouter } from "./Notification.router";
import { verificationtokensRouter } from "./VerificationToken.router";
import { musicRouter } from "./Music.router";
import { albumsRouter } from "./Album.router";
import { artistsRouter } from "./Artist.router";
import { bandsRouter } from "./Band.router";
import { issuesRouter } from "./Issue.router";
import { pullsRouter } from "./Pull.router";
import { votesRouter } from "./Vote.router";

export const appRouter = createRouter()

  .merge('account.', accountsRouter)

  .merge('session.', sessionsRouter)

  .merge('user.', usersRouter)

  .merge('notification.', notificationsRouter)

  .merge('verificationtoken.', verificationtokensRouter)

  .merge('music.', musicRouter)

  .merge('album.', albumsRouter)

  .merge('artist.', artistsRouter)

  .merge('band.', bandsRouter)

  .merge('issue.', issuesRouter)

  .merge('pull.', pullsRouter)

  .merge('vote.', votesRouter)
