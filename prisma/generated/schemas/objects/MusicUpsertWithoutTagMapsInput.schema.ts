import { z } from 'zod';
import { MusicUpdateWithoutTagMapsInputObjectSchema } from './MusicUpdateWithoutTagMapsInput.schema';
import { MusicUncheckedUpdateWithoutTagMapsInputObjectSchema } from './MusicUncheckedUpdateWithoutTagMapsInput.schema';
import { MusicCreateWithoutTagMapsInputObjectSchema } from './MusicCreateWithoutTagMapsInput.schema';
import { MusicUncheckedCreateWithoutTagMapsInputObjectSchema } from './MusicUncheckedCreateWithoutTagMapsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpsertWithoutTagMapsInput> = z
  .object({
    update: z.union([
      z.lazy(() => MusicUpdateWithoutTagMapsInputObjectSchema),
      z.lazy(() => MusicUncheckedUpdateWithoutTagMapsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MusicCreateWithoutTagMapsInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutTagMapsInputObjectSchema),
    ]),
  })
  .strict();

export const MusicUpsertWithoutTagMapsInputObjectSchema = Schema;
