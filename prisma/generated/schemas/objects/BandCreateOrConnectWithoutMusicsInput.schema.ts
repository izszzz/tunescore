import { z } from 'zod';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandCreateWithoutMusicsInputObjectSchema } from './BandCreateWithoutMusicsInput.schema';
import { BandUncheckedCreateWithoutMusicsInputObjectSchema } from './BandUncheckedCreateWithoutMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCreateOrConnectWithoutMusicsInput> = z
  .object({
    where: z.lazy(() => BandWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BandCreateWithoutMusicsInputObjectSchema),
      z.lazy(() => BandUncheckedCreateWithoutMusicsInputObjectSchema),
    ]),
  })
  .strict();

export const BandCreateOrConnectWithoutMusicsInputObjectSchema = Schema;
