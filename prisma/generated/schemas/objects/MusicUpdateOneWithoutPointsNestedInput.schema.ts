import { z } from 'zod';
import { MusicCreateWithoutPointsInputObjectSchema } from './MusicCreateWithoutPointsInput.schema';
import { MusicUncheckedCreateWithoutPointsInputObjectSchema } from './MusicUncheckedCreateWithoutPointsInput.schema';
import { MusicCreateOrConnectWithoutPointsInputObjectSchema } from './MusicCreateOrConnectWithoutPointsInput.schema';
import { MusicUpsertWithoutPointsInputObjectSchema } from './MusicUpsertWithoutPointsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutPointsInputObjectSchema } from './MusicUpdateWithoutPointsInput.schema';
import { MusicUncheckedUpdateWithoutPointsInputObjectSchema } from './MusicUncheckedUpdateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateOneWithoutPointsNestedInput> = z
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
    upsert: z.lazy(() => MusicUpsertWithoutPointsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => MusicUpdateWithoutPointsInputObjectSchema),
        z.lazy(() => MusicUncheckedUpdateWithoutPointsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const MusicUpdateOneWithoutPointsNestedInputObjectSchema = Schema;
