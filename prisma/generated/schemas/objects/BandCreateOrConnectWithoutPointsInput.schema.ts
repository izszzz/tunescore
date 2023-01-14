import { z } from 'zod';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandCreateWithoutPointsInputObjectSchema } from './BandCreateWithoutPointsInput.schema';
import { BandUncheckedCreateWithoutPointsInputObjectSchema } from './BandUncheckedCreateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCreateOrConnectWithoutPointsInput> = z
  .object({
    where: z.lazy(() => BandWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BandCreateWithoutPointsInputObjectSchema),
      z.lazy(() => BandUncheckedCreateWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const BandCreateOrConnectWithoutPointsInputObjectSchema = Schema;
