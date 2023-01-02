import { z } from 'zod';
import { MusicTypeSchema } from '../enums/MusicType.schema';
import { EnumMusicTypeFieldUpdateOperationsInputObjectSchema } from './EnumMusicTypeFieldUpdateOperationsInput.schema';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { EnumVisibilityFieldUpdateOperationsInputObjectSchema } from './EnumVisibilityFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { LinkListNullableUpdateEnvelopeInputObjectSchema } from './LinkListNullableUpdateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { UserUpdateOneWithoutMusicsNestedInputObjectSchema } from './UserUpdateOneWithoutMusicsNestedInput.schema';
import { BandUpdateOneWithoutMusicsNestedInputObjectSchema } from './BandUpdateOneWithoutMusicsNestedInput.schema';
import { AlbumUpdateManyWithoutMusicsNestedInputObjectSchema } from './AlbumUpdateManyWithoutMusicsNestedInput.schema';
import { MusicUpdatealbumIDsInputObjectSchema } from './MusicUpdatealbumIDsInput.schema';
import { ParticipationUpdateManyWithoutMusicNestedInputObjectSchema } from './ParticipationUpdateManyWithoutMusicNestedInput.schema';
import { IssueUpdateManyWithoutMusicNestedInputObjectSchema } from './IssueUpdateManyWithoutMusicNestedInput.schema';
import { PullUpdateManyWithoutMusicNestedInputObjectSchema } from './PullUpdateManyWithoutMusicNestedInput.schema';
import { BookmarkUpdateManyWithoutMusicNestedInputObjectSchema } from './BookmarkUpdateManyWithoutMusicNestedInput.schema';
import { TagMapUpdateManyWithoutMusicNestedInputObjectSchema } from './TagMapUpdateManyWithoutMusicNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateInput> = z
  .object({
    type: z
      .union([
        z.lazy(() => MusicTypeSchema),
        z.lazy(() => EnumMusicTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.lazy(() => LocalesUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LocalesCreateInputObjectSchema),
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
    user: z
      .lazy(() => UserUpdateOneWithoutMusicsNestedInputObjectSchema)
      .optional(),
    band: z
      .lazy(() => BandUpdateOneWithoutMusicsNestedInputObjectSchema)
      .optional(),
    albums: z
      .lazy(() => AlbumUpdateManyWithoutMusicsNestedInputObjectSchema)
      .optional(),
    albumIDs: z
      .union([
        z.lazy(() => MusicUpdatealbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    participations: z
      .lazy(() => ParticipationUpdateManyWithoutMusicNestedInputObjectSchema)
      .optional(),
    issues: z
      .lazy(() => IssueUpdateManyWithoutMusicNestedInputObjectSchema)
      .optional(),
    pulls: z
      .lazy(() => PullUpdateManyWithoutMusicNestedInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkUpdateManyWithoutMusicNestedInputObjectSchema)
      .optional(),
    tagMaps: z
      .lazy(() => TagMapUpdateManyWithoutMusicNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const MusicUpdateInputObjectSchema = Schema;
