import {
  ResourceFindManySchema,
  TransactionFindManySchema,
} from "../../../prisma/generated/schemas";
import { AlbumFindManySchema } from "../../../prisma/generated/schemas/findManyAlbum.schema";
import { ArtistFindManySchema } from "../../../prisma/generated/schemas/findManyArtist.schema";
import { BandFindManySchema } from "../../../prisma/generated/schemas/findManyBand.schema";
import { BookmarkFindManySchema } from "../../../prisma/generated/schemas/findManyBookmark.schema";
import { FollowFindManySchema } from "../../../prisma/generated/schemas/findManyFollow.schema";
import { IssueFindManySchema } from "../../../prisma/generated/schemas/findManyIssue.schema";
import { MusicFindManySchema } from "../../../prisma/generated/schemas/findManyMusic.schema";
import { PullFindManySchema } from "../../../prisma/generated/schemas/findManyPull.schema";
import { RoleFindManySchema } from "../../../prisma/generated/schemas/findManyRole.schema";
import { TagFindManySchema } from "../../../prisma/generated/schemas/findManyTag.schema";
import { UserFindManySchema } from "../../../prisma/generated/schemas/findManyUser.schema";
import { albumListArgs } from "../../helpers/album";
import { artistListArgs } from "../../helpers/artist";
import { bandListArgs } from "../../helpers/band";
import { musicListArgs } from "../../helpers/music";
import { resourceListArgs } from "../../helpers/resource";
import { transactionArgs } from "../../helpers/transaction";
import { publicProcedure, router } from "../trpc";

export const searchRouter = router({
  resource: publicProcedure
    .input(ResourceFindManySchema)
    .mutation(async ({ ctx }) =>
      ctx.prisma.resource.findMany(musicListArgs(ctx.session))
    ),
  music: publicProcedure
    .input(MusicFindManySchema)
    .mutation(async ({ ctx }) =>
      ctx.prisma.music.findMany(musicListArgs(ctx.session))
    ),
  artist: publicProcedure
    .input(ArtistFindManySchema)
    .mutation(async ({ ctx }) =>
      ctx.prisma.artist.findMany(artistListArgs(ctx.session))
    ),
  band: publicProcedure
    .input(BandFindManySchema)
    .mutation(async ({ ctx }) =>
      ctx.prisma.band.findMany(bandListArgs(ctx.session))
    ),
  album: publicProcedure
    .input(AlbumFindManySchema)
    .mutation(async ({ ctx }) =>
      ctx.prisma.album.findMany(albumListArgs(ctx.session))
    ),
  user: publicProcedure
    .input(UserFindManySchema)
    .mutation(async ({ ctx, input }) => ctx.prisma.user.findMany(input)),
  issue: publicProcedure
    .input(IssueFindManySchema)
    .mutation(async ({ ctx, input }) => ctx.prisma.issue.findMany(input)),
  pull: publicProcedure
    .input(PullFindManySchema)
    .mutation(async ({ ctx, input }) => ctx.prisma.pull.findMany(input)),
  tag: publicProcedure
    .input(TagFindManySchema)
    .mutation(async ({ ctx, input }) => ctx.prisma.tag.findMany(input)),
  role: publicProcedure
    .input(RoleFindManySchema)
    .mutation(async ({ ctx, input }) => ctx.prisma.role.findMany(input)),
  follow: publicProcedure
    .input(FollowFindManySchema)
    .mutation(async ({ ctx, input }) =>
      ctx.prisma.follow.findMany({
        ...input,
        include: { follower: true, following: true },
      })
    ),
  transaction: publicProcedure
    .input(TransactionFindManySchema)
    .mutation(async ({ ctx, input }) =>
      ctx.prisma.transaction.findMany({
        ...input,
        include: transactionArgs(ctx.session),
      })
    ),
  bookmark: publicProcedure
    .input(BookmarkFindManySchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.bookmark.findMany({
        ...input,
        include: { resource: resourceListArgs(ctx.session) },
      });
    }),
});
