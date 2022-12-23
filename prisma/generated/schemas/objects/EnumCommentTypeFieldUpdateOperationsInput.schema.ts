import { z } from 'zod';
import { CommentTypeSchema } from '../enums/CommentType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumCommentTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => CommentTypeSchema).optional(),
  })
  .strict();

export const EnumCommentTypeFieldUpdateOperationsInputObjectSchema = Schema;
