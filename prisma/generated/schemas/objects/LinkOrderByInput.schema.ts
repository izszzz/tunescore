import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ImageOrderByInputObjectSchema } from './ImageOrderByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkOrderByInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => ImageOrderByInputObjectSchema).optional(),
  })
  .strict();

export const LinkOrderByInputObjectSchema = Schema;
