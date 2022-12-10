import { z } from 'zod';
import { MusicCreateWithoutPullsInputObjectSchema } from './MusicCreateWithoutPullsInput.schema';
import { MusicUncheckedCreateWithoutPullsInputObjectSchema } from './MusicUncheckedCreateWithoutPullsInput.schema';
import { MusicCreateOrConnectWithoutPullsInputObjectSchema } from './MusicCreateOrConnectWithoutPullsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateNestedOneWithoutPullsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MusicCreateWithoutPullsInputObjectSchema),
        z.lazy(() => MusicUncheckedCreateWithoutPullsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => MusicCreateOrConnectWithoutPullsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const MusicCreateNestedOneWithoutPullsInputObjectSchema = Schema;
