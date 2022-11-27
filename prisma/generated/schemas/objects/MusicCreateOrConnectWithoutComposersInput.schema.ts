import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicCreateWithoutComposersInputObjectSchema } from './MusicCreateWithoutComposersInput.schema';
import { MusicUncheckedCreateWithoutComposersInputObjectSchema } from './MusicUncheckedCreateWithoutComposersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateOrConnectWithoutComposersInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MusicCreateWithoutComposersInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutComposersInputObjectSchema),
    ]),
  })
  .strict();

export const MusicCreateOrConnectWithoutComposersInputObjectSchema = Schema;
