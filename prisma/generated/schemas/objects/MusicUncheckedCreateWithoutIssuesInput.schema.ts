import { z } from 'zod';
import { TypeSchema } from '../enums/Type.schema';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { LinkNullableCreateEnvelopeInputObjectSchema } from './LinkNullableCreateEnvelopeInput.schema';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';
import { AlbumUncheckedCreateNestedManyWithoutMusicsInputObjectSchema } from './AlbumUncheckedCreateNestedManyWithoutMusicsInput.schema';
import { MusicCreatealbumIDsInputObjectSchema } from './MusicCreatealbumIDsInput.schema';
import { ArtistUncheckedCreateNestedManyWithoutComposedMusicsInputObjectSchema } from './ArtistUncheckedCreateNestedManyWithoutComposedMusicsInput.schema';
import { MusicCreatecomposerIDsInputObjectSchema } from './MusicCreatecomposerIDsInput.schema';
import { ArtistUncheckedCreateNestedManyWithoutWrittenMusicsInputObjectSchema } from './ArtistUncheckedCreateNestedManyWithoutWrittenMusicsInput.schema';
import { MusicCreatelyristIDsInputObjectSchema } from './MusicCreatelyristIDsInput.schema';
import { ArtistUncheckedCreateNestedManyWithoutMusicsInputObjectSchema } from './ArtistUncheckedCreateNestedManyWithoutMusicsInput.schema';
import { MusicCreateartistIDsInputObjectSchema } from './MusicCreateartistIDsInput.schema';
import { PullUncheckedCreateNestedManyWithoutMusicInputObjectSchema } from './PullUncheckedCreateNestedManyWithoutMusicInput.schema';
import { UserUncheckedCreateNestedManyWithoutBookmarkMusicsInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutBookmarkMusicsInput.schema';
import { MusicCreateuserIDsInputObjectSchema } from './MusicCreateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUncheckedCreateWithoutIssuesInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => TypeSchema),
    title: z.union([
      z.lazy(() => LocalesCreateEnvelopeInputObjectSchema),
      z.lazy(() => LocalesCreateInputObjectSchema),
    ]),
    score: z.string(),
    visibility: z.lazy(() => VisibilitySchema),
    image: z.string().optional().nullable(),
    link: z
      .union([
        z.lazy(() => LinkNullableCreateEnvelopeInputObjectSchema),
        z.lazy(() => LinkCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
    userId: z.string().optional().nullable(),
    bandId: z.string().optional().nullable(),
    albums: z
      .lazy(() => AlbumUncheckedCreateNestedManyWithoutMusicsInputObjectSchema)
      .optional(),
    albumIDs: z
      .union([
        z.lazy(() => MusicCreatealbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    composers: z
      .lazy(
        () =>
          ArtistUncheckedCreateNestedManyWithoutComposedMusicsInputObjectSchema,
      )
      .optional(),
    composerIDs: z
      .union([
        z.lazy(() => MusicCreatecomposerIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    lyrists: z
      .lazy(
        () =>
          ArtistUncheckedCreateNestedManyWithoutWrittenMusicsInputObjectSchema,
      )
      .optional(),
    lyristIDs: z
      .union([
        z.lazy(() => MusicCreatelyristIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    artists: z
      .lazy(() => ArtistUncheckedCreateNestedManyWithoutMusicsInputObjectSchema)
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => MusicCreateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    pulls: z
      .lazy(() => PullUncheckedCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(
        () =>
          UserUncheckedCreateNestedManyWithoutBookmarkMusicsInputObjectSchema,
      )
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => MusicCreateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const MusicUncheckedCreateWithoutIssuesInputObjectSchema = Schema;
