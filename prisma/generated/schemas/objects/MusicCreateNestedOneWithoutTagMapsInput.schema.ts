import { z } from 'zod';
import { MusicCreateWithoutTagMapsInputObjectSchema } from './MusicCreateWithoutTagMapsInput.schema';
import { MusicUncheckedCreateWithoutTagMapsInputObjectSchema } from './MusicUncheckedCreateWithoutTagMapsInput.schema';
import { MusicCreateOrConnectWithoutTagMapsInputObjectSchema } from './MusicCreateOrConnectWithoutTagMapsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateNestedOneWithoutTagMapsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MusicCreateWithoutTagMapsInputObjectSchema),
        z.lazy(() => MusicUncheckedCreateWithoutTagMapsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => MusicCreateOrConnectWithoutTagMapsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const MusicCreateNestedOneWithoutTagMapsInputObjectSchema = Schema;
