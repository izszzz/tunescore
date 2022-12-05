import { z } from 'zod';
import { TypeSchema } from '../enums/Type.schema';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { LinkNullableCreateEnvelopeInputObjectSchema } from './LinkNullableCreateEnvelopeInput.schema';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';
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
import { PullCreateNestedManyWithoutMusicInputObjectSchema } from './PullCreateNestedManyWithoutMusicInput.schema';
import { MusicCreateuserIDsInputObjectSchema } from './MusicCreateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateWithoutBookmarksInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => TypeSchema),
    title: z.union([
      z.lazy(() => LocalesCreateEnvelopeInputObjectSchema),
      z.lazy(() => LocalesCreateInputObjectSchema),
    ]),
    score: z.string().optional().nullable(),
    visibility: z.lazy(() => VisibilitySchema),
    image: z.string().optional().nullable(),
    price: z.number().optional().nullable(),
    link: z
      .union([
        z.lazy(() => LinkNullableCreateEnvelopeInputObjectSchema),
        z.lazy(() => LinkCreateInputObjectSchema),
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
    pulls: z
      .lazy(() => PullCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => MusicCreateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const MusicCreateWithoutBookmarksInputObjectSchema = Schema;
