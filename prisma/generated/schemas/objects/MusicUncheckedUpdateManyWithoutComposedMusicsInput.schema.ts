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
import { MusicUpdatealbumIDsInputObjectSchema } from './MusicUpdatealbumIDsInput.schema';
import { MusicUpdatecomposerIDsInputObjectSchema } from './MusicUpdatecomposerIDsInput.schema';
import { MusicUpdatelyristIDsInputObjectSchema } from './MusicUpdatelyristIDsInput.schema';
import { MusicUpdateartistIDsInputObjectSchema } from './MusicUpdateartistIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUncheckedUpdateManyWithoutComposedMusicsInput> =
  z
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
      lyristIDs: z
        .union([
          z.lazy(() => MusicUpdatelyristIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      artistIDs: z
        .union([
          z.lazy(() => MusicUpdateartistIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
    })
    .strict();

export const MusicUncheckedUpdateManyWithoutComposedMusicsInputObjectSchema =
  Schema;
