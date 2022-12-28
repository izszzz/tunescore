import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TagTypeSchema } from '../enums/TagType.schema';
import { EnumTagTypeFieldUpdateOperationsInputObjectSchema } from './EnumTagTypeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUncheckedUpdateWithoutArtistInput> = z
  .object({
    tagId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => TagTypeSchema),
        z.lazy(() => EnumTagTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TagMapUncheckedUpdateWithoutArtistInputObjectSchema = Schema;
