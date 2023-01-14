import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointCreateWithoutIssueInputObjectSchema } from './PointCreateWithoutIssueInput.schema';
import { PointUncheckedCreateWithoutIssueInputObjectSchema } from './PointUncheckedCreateWithoutIssueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateOrConnectWithoutIssueInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PointCreateWithoutIssueInputObjectSchema),
      z.lazy(() => PointUncheckedCreateWithoutIssueInputObjectSchema),
    ]),
  })
  .strict();

export const PointCreateOrConnectWithoutIssueInputObjectSchema = Schema;
