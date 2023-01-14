import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithoutBandInputObjectSchema } from './PointUpdateWithoutBandInput.schema';
import { PointUncheckedUpdateWithoutBandInputObjectSchema } from './PointUncheckedUpdateWithoutBandInput.schema';
import { PointCreateWithoutBandInputObjectSchema } from './PointCreateWithoutBandInput.schema';
import { PointUncheckedCreateWithoutBandInputObjectSchema } from './PointUncheckedCreateWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpsertWithWhereUniqueWithoutBandInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PointUpdateWithoutBandInputObjectSchema),
      z.lazy(() => PointUncheckedUpdateWithoutBandInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PointCreateWithoutBandInputObjectSchema),
      z.lazy(() => PointUncheckedCreateWithoutBandInputObjectSchema),
    ]),
  })
  .strict();

export const PointUpsertWithWhereUniqueWithoutBandInputObjectSchema = Schema;
