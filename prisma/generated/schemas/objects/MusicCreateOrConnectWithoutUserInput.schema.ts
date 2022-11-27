import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicCreateWithoutUserInputObjectSchema } from './MusicCreateWithoutUserInput.schema';
import { MusicUncheckedCreateWithoutUserInputObjectSchema } from './MusicUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MusicCreateWithoutUserInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const MusicCreateOrConnectWithoutUserInputObjectSchema = Schema;
