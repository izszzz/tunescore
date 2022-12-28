import { z } from 'zod';
import { MusicCreateWithoutTagMapsInputObjectSchema } from './MusicCreateWithoutTagMapsInput.schema';
import { MusicUncheckedCreateWithoutTagMapsInputObjectSchema } from './MusicUncheckedCreateWithoutTagMapsInput.schema';
import { MusicCreateOrConnectWithoutTagMapsInputObjectSchema } from './MusicCreateOrConnectWithoutTagMapsInput.schema';
import { MusicUpsertWithoutTagMapsInputObjectSchema } from './MusicUpsertWithoutTagMapsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutTagMapsInputObjectSchema } from './MusicUpdateWithoutTagMapsInput.schema';
import { MusicUncheckedUpdateWithoutTagMapsInputObjectSchema } from './MusicUncheckedUpdateWithoutTagMapsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateOneWithoutTagMapsNestedInput> = z
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
    upsert: z.lazy(() => MusicUpsertWithoutTagMapsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => MusicUpdateWithoutTagMapsInputObjectSchema),
        z.lazy(() => MusicUncheckedUpdateWithoutTagMapsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const MusicUpdateOneWithoutTagMapsNestedInputObjectSchema = Schema;
