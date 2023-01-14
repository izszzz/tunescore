import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithoutIssueInputObjectSchema } from './PointUpdateWithoutIssueInput.schema';
import { PointUncheckedUpdateWithoutIssueInputObjectSchema } from './PointUncheckedUpdateWithoutIssueInput.schema';
import { PointCreateWithoutIssueInputObjectSchema } from './PointCreateWithoutIssueInput.schema';
import { PointUncheckedCreateWithoutIssueInputObjectSchema } from './PointUncheckedCreateWithoutIssueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpsertWithWhereUniqueWithoutIssueInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PointUpdateWithoutIssueInputObjectSchema),
      z.lazy(() => PointUncheckedUpdateWithoutIssueInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PointCreateWithoutIssueInputObjectSchema),
      z.lazy(() => PointUncheckedCreateWithoutIssueInputObjectSchema),
    ]),
  })
  .strict();

export const PointUpsertWithWhereUniqueWithoutIssueInputObjectSchema = Schema;
