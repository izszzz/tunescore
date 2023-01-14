import { z } from 'zod';
import { MusicCreateWithoutPointsInputObjectSchema } from './MusicCreateWithoutPointsInput.schema';
import { MusicUncheckedCreateWithoutPointsInputObjectSchema } from './MusicUncheckedCreateWithoutPointsInput.schema';
import { MusicCreateOrConnectWithoutPointsInputObjectSchema } from './MusicCreateOrConnectWithoutPointsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateNestedOneWithoutPointsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MusicCreateWithoutPointsInputObjectSchema),
        z.lazy(() => MusicUncheckedCreateWithoutPointsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => MusicCreateOrConnectWithoutPointsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const MusicCreateNestedOneWithoutPointsInputObjectSchema = Schema;
