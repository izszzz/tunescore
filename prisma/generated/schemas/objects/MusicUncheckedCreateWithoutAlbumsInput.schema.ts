import { z } from 'zod';
import { MusicTypeSchema } from '../enums/MusicType.schema';
import { LocaleCreateEnvelopeInputObjectSchema } from './LocaleCreateEnvelopeInput.schema';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { MusicCreatealbumIDsInputObjectSchema } from './MusicCreatealbumIDsInput.schema';
import { ParticipationUncheckedCreateNestedManyWithoutMusicInputObjectSchema } from './ParticipationUncheckedCreateNestedManyWithoutMusicInput.schema';
import { IssueUncheckedCreateNestedManyWithoutMusicInputObjectSchema } from './IssueUncheckedCreateNestedManyWithoutMusicInput.schema';
import { PullUncheckedCreateNestedManyWithoutMusicInputObjectSchema } from './PullUncheckedCreateNestedManyWithoutMusicInput.schema';
import { CartUncheckedCreateNestedManyWithoutMusicInputObjectSchema } from './CartUncheckedCreateNestedManyWithoutMusicInput.schema';
import { PurchaseUncheckedCreateNestedManyWithoutMusicInputObjectSchema } from './PurchaseUncheckedCreateNestedManyWithoutMusicInput.schema';
import { PointUncheckedCreateNestedManyWithoutMusicInputObjectSchema } from './PointUncheckedCreateNestedManyWithoutMusicInput.schema';
import { BookmarkUncheckedCreateNestedManyWithoutMusicInputObjectSchema } from './BookmarkUncheckedCreateNestedManyWithoutMusicInput.schema';
import { TagMapUncheckedCreateNestedManyWithoutMusicInputObjectSchema } from './TagMapUncheckedCreateNestedManyWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUncheckedCreateWithoutAlbumsInput> = z
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
    userId: z.string().optional().nullable(),
    bandId: z.string().optional().nullable(),
    albumIDs: z
      .union([
        z.lazy(() => MusicCreatealbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    participations: z
      .lazy(
        () =>
          ParticipationUncheckedCreateNestedManyWithoutMusicInputObjectSchema,
      )
      .optional(),
    issues: z
      .lazy(() => IssueUncheckedCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    pulls: z
      .lazy(() => PullUncheckedCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    carts: z
      .lazy(() => CartUncheckedCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    purchases: z
      .lazy(
        () => PurchaseUncheckedCreateNestedManyWithoutMusicInputObjectSchema,
      )
      .optional(),
    points: z
      .lazy(() => PointUncheckedCreateNestedManyWithoutMusicInputObjectSchema)
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

export const MusicUncheckedCreateWithoutAlbumsInputObjectSchema = Schema;
