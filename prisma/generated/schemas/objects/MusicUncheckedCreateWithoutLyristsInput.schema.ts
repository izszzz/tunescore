import { z } from 'zod';
import { MusicTypeSchema } from '../enums/MusicType.schema';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { AlbumUncheckedCreateNestedManyWithoutMusicsInputObjectSchema } from './AlbumUncheckedCreateNestedManyWithoutMusicsInput.schema';
import { MusicCreatealbumIDsInputObjectSchema } from './MusicCreatealbumIDsInput.schema';
import { ArtistUncheckedCreateNestedManyWithoutComposedMusicsInputObjectSchema } from './ArtistUncheckedCreateNestedManyWithoutComposedMusicsInput.schema';
import { MusicCreatecomposerIDsInputObjectSchema } from './MusicCreatecomposerIDsInput.schema';
import { MusicCreatelyristIDsInputObjectSchema } from './MusicCreatelyristIDsInput.schema';
import { ArtistUncheckedCreateNestedManyWithoutMusicsInputObjectSchema } from './ArtistUncheckedCreateNestedManyWithoutMusicsInput.schema';
import { MusicCreateartistIDsInputObjectSchema } from './MusicCreateartistIDsInput.schema';
import { IssueUncheckedCreateNestedManyWithoutMusicInputObjectSchema } from './IssueUncheckedCreateNestedManyWithoutMusicInput.schema';
import { PullUncheckedCreateNestedManyWithoutMusicInputObjectSchema } from './PullUncheckedCreateNestedManyWithoutMusicInput.schema';
import { BookmarkUncheckedCreateNestedManyWithoutMusicInputObjectSchema } from './BookmarkUncheckedCreateNestedManyWithoutMusicInput.schema';
import { TagMapUncheckedCreateNestedManyWithoutMusicInputObjectSchema } from './TagMapUncheckedCreateNestedManyWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUncheckedCreateWithoutLyristsInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => MusicTypeSchema),
    title: z.union([
      z.lazy(() => LocalesCreateEnvelopeInputObjectSchema),
      z.lazy(() => LocalesCreateInputObjectSchema),
    ]),
    score: z.string().optional().nullable(),
    visibility: z.lazy(() => VisibilitySchema),
    price: z.number().optional().nullable(),
    link: z
      .union([
        z.lazy(() => LinkListNullableCreateEnvelopeInputObjectSchema),
        z.lazy(() => LinkListCreateInputObjectSchema),
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
    issues: z
      .lazy(() => IssueUncheckedCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    pulls: z
      .lazy(() => PullUncheckedCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(
        () => BookmarkUncheckedCreateNestedManyWithoutMusicInputObjectSchema,
      )
      .optional(),
    tagMaps: z
      .lazy(() => TagMapUncheckedCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
  })
  .strict();

export const MusicUncheckedCreateWithoutLyristsInputObjectSchema = Schema;
