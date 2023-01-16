import { z } from 'zod';
import { MusicTypeSchema } from '../enums/MusicType.schema';
import { LocaleCreateEnvelopeInputObjectSchema } from './LocaleCreateEnvelopeInput.schema';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { UserCreateNestedOneWithoutMusicsInputObjectSchema } from './UserCreateNestedOneWithoutMusicsInput.schema';
import { BandCreateNestedOneWithoutMusicsInputObjectSchema } from './BandCreateNestedOneWithoutMusicsInput.schema';
import { AlbumCreateNestedManyWithoutMusicsInputObjectSchema } from './AlbumCreateNestedManyWithoutMusicsInput.schema';
import { MusicCreatealbumIDsInputObjectSchema } from './MusicCreatealbumIDsInput.schema';
import { ParticipationCreateNestedManyWithoutMusicInputObjectSchema } from './ParticipationCreateNestedManyWithoutMusicInput.schema';
import { IssueCreateNestedManyWithoutMusicInputObjectSchema } from './IssueCreateNestedManyWithoutMusicInput.schema';
import { PullCreateNestedManyWithoutMusicInputObjectSchema } from './PullCreateNestedManyWithoutMusicInput.schema';
import { CartCreateNestedManyWithoutMusicInputObjectSchema } from './CartCreateNestedManyWithoutMusicInput.schema';
import { PointCreateNestedManyWithoutMusicInputObjectSchema } from './PointCreateNestedManyWithoutMusicInput.schema';
import { BookmarkCreateNestedManyWithoutMusicInputObjectSchema } from './BookmarkCreateNestedManyWithoutMusicInput.schema';
import { TagMapCreateNestedManyWithoutMusicInputObjectSchema } from './TagMapCreateNestedManyWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateWithoutPurchasesInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => MusicTypeSchema),
    title: z.union([
      z.lazy(() => LocaleCreateEnvelopeInputObjectSchema),
      z.lazy(() => LocaleCreateInputObjectSchema),
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
    participations: z
      .lazy(() => ParticipationCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    issues: z
      .lazy(() => IssueCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    pulls: z
      .lazy(() => PullCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    carts: z
      .lazy(() => CartCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    points: z
      .lazy(() => PointCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    tagMaps: z
      .lazy(() => TagMapCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
  })
  .strict();

export const MusicCreateWithoutPurchasesInputObjectSchema = Schema;
