import { z } from 'zod';
import { MusicTypeSchema } from '../enums/MusicType.schema';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { UserCreateNestedOneWithoutMusicsInputObjectSchema } from './UserCreateNestedOneWithoutMusicsInput.schema';
import { BandCreateNestedOneWithoutMusicsInputObjectSchema } from './BandCreateNestedOneWithoutMusicsInput.schema';
import { AlbumCreateNestedManyWithoutMusicsInputObjectSchema } from './AlbumCreateNestedManyWithoutMusicsInput.schema';
import { MusicCreatealbumIDsInputObjectSchema } from './MusicCreatealbumIDsInput.schema';
import { ArtistCreateNestedManyWithoutComposedMusicsInputObjectSchema } from './ArtistCreateNestedManyWithoutComposedMusicsInput.schema';
import { MusicCreatecomposerIDsInputObjectSchema } from './MusicCreatecomposerIDsInput.schema';
import { ArtistCreateNestedManyWithoutWrittenMusicsInputObjectSchema } from './ArtistCreateNestedManyWithoutWrittenMusicsInput.schema';
import { MusicCreatelyristIDsInputObjectSchema } from './MusicCreatelyristIDsInput.schema';
import { ArtistCreateNestedManyWithoutMusicsInputObjectSchema } from './ArtistCreateNestedManyWithoutMusicsInput.schema';
import { MusicCreateartistIDsInputObjectSchema } from './MusicCreateartistIDsInput.schema';
import { IssueCreateNestedManyWithoutMusicInputObjectSchema } from './IssueCreateNestedManyWithoutMusicInput.schema';
import { BookmarkCreateNestedManyWithoutMusicInputObjectSchema } from './BookmarkCreateNestedManyWithoutMusicInput.schema';
import { TagMapCreateNestedManyWithoutMusicInputObjectSchema } from './TagMapCreateNestedManyWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateWithoutPullsInput> = z
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
    user: z
      .lazy(() => UserCreateNestedOneWithoutMusicsInputObjectSchema)
      .optional(),
    band: z
      .lazy(() => BandCreateNestedOneWithoutMusicsInputObjectSchema)
      .optional(),
    albums: z
      .lazy(() => AlbumCreateNestedManyWithoutMusicsInputObjectSchema)
      .optional(),
    albumIDs: z
      .union([
        z.lazy(() => MusicCreatealbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    composers: z
      .lazy(() => ArtistCreateNestedManyWithoutComposedMusicsInputObjectSchema)
      .optional(),
    composerIDs: z
      .union([
        z.lazy(() => MusicCreatecomposerIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    lyrists: z
      .lazy(() => ArtistCreateNestedManyWithoutWrittenMusicsInputObjectSchema)
      .optional(),
    lyristIDs: z
      .union([
        z.lazy(() => MusicCreatelyristIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    artists: z
      .lazy(() => ArtistCreateNestedManyWithoutMusicsInputObjectSchema)
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => MusicCreateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    issues: z
      .lazy(() => IssueCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    tagMaps: z
      .lazy(() => TagMapCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
  })
  .strict();

export const MusicCreateWithoutPullsInputObjectSchema = Schema;
