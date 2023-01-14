import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithoutIssueInputObjectSchema } from './PointUpdateWithoutIssueInput.schema';
import { PointUncheckedUpdateWithoutIssueInputObjectSchema } from './PointUncheckedUpdateWithoutIssueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpdateWithWhereUniqueWithoutIssueInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PointUpdateWithoutIssueInputObjectSchema),
      z.lazy(() => PointUncheckedUpdateWithoutIssueInputObjectSchema),
    ]),
  })
  .strict();

export const PointUpdateWithWhereUniqueWithoutIssueInputObjectSchema = Schema;
