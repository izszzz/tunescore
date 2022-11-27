import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutUserInputObjectSchema } from './MusicUpdateWithoutUserInput.schema';
import { MusicUncheckedUpdateWithoutUserInputObjectSchema } from './MusicUncheckedUpdateWithoutUserInput.schema';
import { MusicCreateWithoutUserInputObjectSchema } from './MusicCreateWithoutUserInput.schema';
import { MusicUncheckedCreateWithoutUserInputObjectSchema } from './MusicUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => MusicUpdateWithoutUserInputObjectSchema),
      z.lazy(() => MusicUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MusicCreateWithoutUserInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const MusicUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
