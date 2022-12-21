import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageSizeOrderByInput> = z
  .object({
    small: z.lazy(() => SortOrderSchema).optional(),
    medium: z.lazy(() => SortOrderSchema).optional(),
    large: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ImageSizeOrderByInputObjectSchema = Schema;
