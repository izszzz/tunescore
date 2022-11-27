import { z } from 'zod';
import { TypeSchema } from '../enums/Type.schema';
import { EnumTypeFieldUpdateOperationsInputObjectSchema } from './EnumTypeFieldUpdateOperationsInput.schema';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { EnumVisibilityFieldUpdateOperationsInputObjectSchema } from './EnumVisibilityFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { LinkNullableUpdateEnvelopeInputObjectSchema } from './LinkNullableUpdateEnvelopeInput.schema';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';
import { AlbumUncheckedUpdateManyWithoutMusicsNestedInputObjectSchema } from './AlbumUncheckedUpdateManyWithoutMusicsNestedInput.schema';
import { MusicUpdatealbumIDsInputObjectSchema } from './MusicUpdatealbumIDsInput.schema';
import { MusicUpdatecomposerIDsInputObjectSchema } from './MusicUpdatecomposerIDsInput.schema';
import { ArtistUncheckedUpdateManyWithoutWrittenMusicsNestedInputObjectSchema } from './ArtistUncheckedUpdateManyWithoutWrittenMusicsNestedInput.schema';
import { MusicUpdatelyristIDsInputObjectSchema } from './MusicUpdatelyristIDsInput.schema';
import { ArtistUncheckedUpdateManyWithoutMusicsNestedInputObjectSchema } from './ArtistUncheckedUpdateManyWithoutMusicsNestedInput.schema';
import { MusicUpdateartistIDsInputObjectSchema } from './MusicUpdateartistIDsInput.schema';
import { IssueUncheckedUpdateManyWithoutMusicNestedInputObjectSchema } from './IssueUncheckedUpdateManyWithoutMusicNestedInput.schema';
import { PullUncheckedUpdateManyWithoutMusicNestedInputObjectSchema } from './PullUncheckedUpdateManyWithoutMusicNestedInput.schema';
import { UserUncheckedUpdateManyWithoutBookmarkMusicsNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutBookmarkMusicsNestedInput.schema';
import { MusicUpdateuserIDsInputObjectSchema } from './MusicUpdateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUncheckedUpdateWithoutComposersInput> = z
  .object({
    type: z
      .union([
        z.lazy(() => TypeSchema),
        z.lazy(() => EnumTypeFieldUpdateOperationsInputObjectSchema),
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
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    visibility: z
      .union([
        z.lazy(() => VisibilitySchema),
        z.lazy(() => EnumVisibilityFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    link: z
      .union([
        z.lazy(() => LinkNullableUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LinkCreateInputObjectSchema),
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
    composerIDs: z
      .union([
        z.lazy(() => MusicUpdatecomposerIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    lyrists: z
      .lazy(
        () =>
          ArtistUncheckedUpdateManyWithoutWrittenMusicsNestedInputObjectSchema,
      )
      .optional(),
    lyristIDs: z
      .union([
        z.lazy(() => MusicUpdatelyristIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    artists: z
      .lazy(() => ArtistUncheckedUpdateManyWithoutMusicsNestedInputObjectSchema)
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => MusicUpdateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    issues: z
      .lazy(() => IssueUncheckedUpdateManyWithoutMusicNestedInputObjectSchema)
      .optional(),
    pulls: z
      .lazy(() => PullUncheckedUpdateManyWithoutMusicNestedInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(
        () =>
          UserUncheckedUpdateManyWithoutBookmarkMusicsNestedInputObjectSchema,
      )
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => MusicUpdateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const MusicUncheckedUpdateWithoutComposersInputObjectSchema = Schema;
