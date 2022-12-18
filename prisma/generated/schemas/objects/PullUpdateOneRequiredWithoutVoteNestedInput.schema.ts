import { z } from 'zod';
import { PullCreateWithoutVoteInputObjectSchema } from './PullCreateWithoutVoteInput.schema';
import { PullUncheckedCreateWithoutVoteInputObjectSchema } from './PullUncheckedCreateWithoutVoteInput.schema';
import { PullCreateOrConnectWithoutVoteInputObjectSchema } from './PullCreateOrConnectWithoutVoteInput.schema';
import { PullUpsertWithoutVoteInputObjectSchema } from './PullUpsertWithoutVoteInput.schema';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';
import { PullUpdateWithoutVoteInputObjectSchema } from './PullUpdateWithoutVoteInput.schema';
import { PullUncheckedUpdateWithoutVoteInputObjectSchema } from './PullUncheckedUpdateWithoutVoteInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUpdateOneRequiredWithoutVoteNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PullCreateWithoutVoteInputObjectSchema),
        z.lazy(() => PullUncheckedCreateWithoutVoteInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PullCreateOrConnectWithoutVoteInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => PullUpsertWithoutVoteInputObjectSchema).optional(),
    connect: z.lazy(() => PullWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => PullUpdateWithoutVoteInputObjectSchema),
        z.lazy(() => PullUncheckedUpdateWithoutVoteInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PullUpdateOneRequiredWithoutVoteNestedInputObjectSchema = Schema;
