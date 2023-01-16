import { z } from 'zod';
import { MusicTypeSchema } from '../enums/MusicType.schema';
import { EnumMusicTypeFieldUpdateOperationsInputObjectSchema } from './EnumMusicTypeFieldUpdateOperationsInput.schema';
import { LocaleUpdateEnvelopeInputObjectSchema } from './LocaleUpdateEnvelopeInput.schema';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { EnumVisibilityFieldUpdateOperationsInputObjectSchema } from './EnumVisibilityFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { LinkListNullableUpdateEnvelopeInputObjectSchema } from './LinkListNullableUpdateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { AlbumUncheckedUpdateManyWithoutMusicsNestedInputObjectSchema } from './AlbumUncheckedUpdateManyWithoutMusicsNestedInput.schema';
import { MusicUpdatealbumIDsInputObjectSchema } from './MusicUpdatealbumIDsInput.schema';
import { ParticipationUncheckedUpdateManyWithoutMusicNestedInputObjectSchema } from './ParticipationUncheckedUpdateManyWithoutMusicNestedInput.schema';
import { IssueUncheckedUpdateManyWithoutMusicNestedInputObjectSchema } from './IssueUncheckedUpdateManyWithoutMusicNestedInput.schema';
import { PullUncheckedUpdateManyWithoutMusicNestedInputObjectSchema } from './PullUncheckedUpdateManyWithoutMusicNestedInput.schema';
import { CartUncheckedUpdateManyWithoutMusicNestedInputObjectSchema } from './CartUncheckedUpdateManyWithoutMusicNestedInput.schema';
import { PurchaseUncheckedUpdateManyWithoutMusicNestedInputObjectSchema } from './PurchaseUncheckedUpdateManyWithoutMusicNestedInput.schema';
import { BookmarkUncheckedUpdateManyWithoutMusicNestedInputObjectSchema } from './BookmarkUncheckedUpdateManyWithoutMusicNestedInput.schema';
import { TagMapUncheckedUpdateManyWithoutMusicNestedInputObjectSchema } from './TagMapUncheckedUpdateManyWithoutMusicNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUncheckedUpdateInput> = z
  .object({
    type: z
      .union([
        z.lazy(() => MusicTypeSchema),
        z.lazy(() => EnumMusicTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.lazy(() => LocaleUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LocaleCreateInputObjectSchema),
      ])
      .optional(),
    score: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    visibility: z
      .union([
        z.lazy(() => VisibilitySchema),
        z.lazy(() => EnumVisibilityFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    price: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    link: z
      .union([
        z.lazy(() => LinkListNullableUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LinkListCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
    userId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    bandId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    albums: z
      .lazy(() => AlbumUncheckedUpdateManyWithoutMusicsNestedInputObjectSchema)
      .optional(),
    albumIDs: z
      .union([
        z.lazy(() => MusicUpdatealbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    participations: z
      .lazy(
        () =>
          ParticipationUncheckedUpdateManyWithoutMusicNestedInputObjectSchema,
      )
      .optional(),
    issues: z
      .lazy(() => IssueUncheckedUpdateManyWithoutMusicNestedInputObjectSchema)
      .optional(),
    pulls: z
      .lazy(() => PullUncheckedUpdateManyWithoutMusicNestedInputObjectSchema)
      .optional(),
    carts: z
      .lazy(() => CartUncheckedUpdateManyWithoutMusicNestedInputObjectSchema)
      .optional(),
    purchases: z
      .lazy(
        () => PurchaseUncheckedUpdateManyWithoutMusicNestedInputObjectSchema,
      )
      .optional(),
    bookmarks: z
      .lazy(
        () => BookmarkUncheckedUpdateManyWithoutMusicNestedInputObjectSchema,
      )
      .optional(),
    tagMaps: z
      .lazy(() => TagMapUncheckedUpdateManyWithoutMusicNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const MusicUncheckedUpdateInputObjectSchema = Schema;
