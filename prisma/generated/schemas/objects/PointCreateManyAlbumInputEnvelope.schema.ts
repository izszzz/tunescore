import { z } from 'zod';
import { PointCreateManyAlbumInputObjectSchema } from './PointCreateManyAlbumInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateManyAlbumInputEnvelope> = z
  .object({
    data: z.lazy(() => PointCreateManyAlbumInputObjectSchema).array(),
  })
  .strict();

export const PointCreateManyAlbumInputEnvelopeObjectSchema = Schema;
