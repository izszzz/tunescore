import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicCreateWithoutTagMapsInputObjectSchema } from './MusicCreateWithoutTagMapsInput.schema';
import { MusicUncheckedCreateWithoutTagMapsInputObjectSchema } from './MusicUncheckedCreateWithoutTagMapsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateOrConnectWithoutTagMapsInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MusicCreateWithoutTagMapsInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutTagMapsInputObjectSchema),
    ]),
  })
  .strict();

export const MusicCreateOrConnectWithoutTagMapsInputObjectSchema = Schema;
