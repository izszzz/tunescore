import { z } from 'zod';
import { VoteCreateWithoutPullInputObjectSchema } from './VoteCreateWithoutPullInput.schema';
import { VoteUncheckedCreateWithoutPullInputObjectSchema } from './VoteUncheckedCreateWithoutPullInput.schema';
import { VoteCreateOrConnectWithoutPullInputObjectSchema } from './VoteCreateOrConnectWithoutPullInput.schema';
import { VoteUpsertWithoutPullInputObjectSchema } from './VoteUpsertWithoutPullInput.schema';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateWithoutPullInputObjectSchema } from './VoteUpdateWithoutPullInput.schema';
import { VoteUncheckedUpdateWithoutPullInputObjectSchema } from './VoteUncheckedUpdateWithoutPullInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteUpdateOneWithoutPullNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VoteCreateWithoutPullInputObjectSchema),
        z.lazy(() => VoteUncheckedCreateWithoutPullInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => VoteCreateOrConnectWithoutPullInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => VoteUpsertWithoutPullInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VoteWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VoteUpdateWithoutPullInputObjectSchema),
        z.lazy(() => VoteUncheckedUpdateWithoutPullInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const VoteUpdateOneWithoutPullNestedInputObjectSchema = Schema;
