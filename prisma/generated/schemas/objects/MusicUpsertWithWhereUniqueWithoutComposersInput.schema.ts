import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutComposersInputObjectSchema } from './MusicUpdateWithoutComposersInput.schema';
import { MusicUncheckedUpdateWithoutComposersInputObjectSchema } from './MusicUncheckedUpdateWithoutComposersInput.schema';
import { MusicCreateWithoutComposersInputObjectSchema } from './MusicCreateWithoutComposersInput.schema';
import { MusicUncheckedCreateWithoutComposersInputObjectSchema } from './MusicUncheckedCreateWithoutComposersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpsertWithWhereUniqueWithoutComposersInput> =
  z
    .object({
      where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MusicUpdateWithoutComposersInputObjectSchema),
        z.lazy(() => MusicUncheckedUpdateWithoutComposersInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MusicCreateWithoutComposersInputObjectSchema),
        z.lazy(() => MusicUncheckedCreateWithoutComposersInputObjectSchema),
      ]),
    })
    .strict();

export const MusicUpsertWithWhereUniqueWithoutComposersInputObjectSchema =
  Schema;
