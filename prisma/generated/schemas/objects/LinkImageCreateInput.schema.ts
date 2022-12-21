import { z } from 'zod';
import { ImageCreateInputObjectSchema } from './ImageCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkImageCreateInput> = z
  .object({
    id: z.string().optional().nullable(),
    url: z.string().optional().nullable(),
    image: z.lazy(() => ImageCreateInputObjectSchema),
  })
  .strict();

export const LinkImageCreateInputObjectSchema = Schema;
