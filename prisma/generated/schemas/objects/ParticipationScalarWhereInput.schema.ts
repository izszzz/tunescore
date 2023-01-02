import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ParticipationScalarWhereInputObjectSchema),
        z.lazy(() => ParticipationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ParticipationScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ParticipationScalarWhereInputObjectSchema),
        z.lazy(() => ParticipationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    artistId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    musicId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const ParticipationScalarWhereInputObjectSchema = Schema;
