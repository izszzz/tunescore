import { z } from 'zod';
import { TypeSchema } from '../enums/Type.schema';
import { EnumTypeFieldUpdateOperationsInputObjectSchema } from './EnumTypeFieldUpdateOperationsInput.schema';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { EnumVisibilityFieldUpdateOperationsInputObjectSchema } from './EnumVisibilityFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { LinkListNullableUpdateEnvelopeInputObjectSchema } from './LinkListNullableUpdateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { UserUpdateOneWithoutMusicsNestedInputObjectSchema } from './UserUpdateOneWithoutMusicsNestedInput.schema';
import { AlbumUpdateManyWithoutMusicsNestedInputObjectSchema } from './AlbumUpdateManyWithoutMusicsNestedInput.schema';
import { MusicUpdatealbumIDsInputObjectSchema } from './MusicUpdatealbumIDsInput.schema';
import { ArtistUpdateManyWithoutComposedMusicsNestedInputObjectSchema } from './ArtistUpdateManyWithoutComposedMusicsNestedInput.schema';
import { MusicUpdatecomposerIDsInputObjectSchema } from './MusicUpdatecomposerIDsInput.schema';
import { ArtistUpdateManyWithoutWrittenMusicsNestedInputObjectSchema } from './ArtistUpdateManyWithoutWrittenMusicsNestedInput.schema';
import { MusicUpdatelyristIDsInputObjectSchema } from './MusicUpdatelyristIDsInput.schema';
import { ArtistUpdateManyWithoutMusicsNestedInputObjectSchema } from './ArtistUpdateManyWithoutMusicsNestedInput.schema';
import { MusicUpdateartistIDsInputObjectSchema } from './MusicUpdateartistIDsInput.schema';
import { IssueUpdateManyWithoutMusicNestedInputObjectSchema } from './IssueUpdateManyWithoutMusicNestedInput.schema';
import { PullUpdateManyWithoutMusicNestedInputObjectSchema } from './PullUpdateManyWithoutMusicNestedInput.schema';
import { UserUpdateManyWithoutBookmarkMusicsNestedInputObjectSchema } from './UserUpdateManyWithoutBookmarkMusicsNestedInput.schema';
import { MusicUpdateuserIDsInputObjectSchema } from './MusicUpdateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateWithoutBandInput> = z
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
    albums: z
      .lazy(() => AlbumUpdateManyWithoutMusicsNestedInputObjectSchema)
      .optional(),
    albumIDs: z
      .union([
        z.lazy(() => MusicUpdatealbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    composers: z
      .lazy(() => ArtistUpdateManyWithoutComposedMusicsNestedInputObjectSchema)
      .optional(),
    composerIDs: z
      .union([
        z.lazy(() => MusicUpdatecomposerIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    lyrists: z
      .lazy(() => ArtistUpdateManyWithoutWrittenMusicsNestedInputObjectSchema)
      .optional(),
    lyristIDs: z
      .union([
        z.lazy(() => MusicUpdatelyristIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    artists: z
      .lazy(() => ArtistUpdateManyWithoutMusicsNestedInputObjectSchema)
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => MusicUpdateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    issues: z
      .lazy(() => IssueUpdateManyWithoutMusicNestedInputObjectSchema)
      .optional(),
    pulls: z
      .lazy(() => PullUpdateManyWithoutMusicNestedInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => UserUpdateManyWithoutBookmarkMusicsNestedInputObjectSchema)
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => MusicUpdateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const MusicUpdateWithoutBandInputObjectSchema = Schema;
