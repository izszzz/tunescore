import { z } from 'zod';
import { MusicTypeSchema } from '../enums/MusicType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumMusicTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => MusicTypeSchema).optional(),
  })
  .strict();

export const EnumMusicTypeFieldUpdateOperationsInputObjectSchema = Schema;
