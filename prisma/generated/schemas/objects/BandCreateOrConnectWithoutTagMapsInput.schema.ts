import { z } from 'zod';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandCreateWithoutTagMapsInputObjectSchema } from './BandCreateWithoutTagMapsInput.schema';
import { BandUncheckedCreateWithoutTagMapsInputObjectSchema } from './BandUncheckedCreateWithoutTagMapsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCreateOrConnectWithoutTagMapsInput> = z
  .object({
    where: z.lazy(() => BandWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BandCreateWithoutTagMapsInputObjectSchema),
      z.lazy(() => BandUncheckedCreateWithoutTagMapsInputObjectSchema),
    ]),
  })
  .strict();

export const BandCreateOrConnectWithoutTagMapsInputObjectSchema = Schema;
