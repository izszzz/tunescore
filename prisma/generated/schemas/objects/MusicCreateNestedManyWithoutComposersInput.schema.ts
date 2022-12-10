import { z } from 'zod';
import { MusicCreateWithoutComposersInputObjectSchema } from './MusicCreateWithoutComposersInput.schema';
import { MusicUncheckedCreateWithoutComposersInputObjectSchema } from './MusicUncheckedCreateWithoutComposersInput.schema';
import { MusicCreateOrConnectWithoutComposersInputObjectSchema } from './MusicCreateOrConnectWithoutComposersInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateNestedManyWithoutComposersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MusicCreateWithoutComposersInputObjectSchema),
        z.lazy(() => MusicCreateWithoutComposersInputObjectSchema).array(),
        z.lazy(() => MusicUncheckedCreateWithoutComposersInputObjectSchema),
        z
          .lazy(() => MusicUncheckedCreateWithoutComposersInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MusicCreateOrConnectWithoutComposersInputObjectSchema),
        z
          .lazy(() => MusicCreateOrConnectWithoutComposersInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => MusicWhereUniqueInputObjectSchema),
        z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MusicCreateNestedManyWithoutComposersInputObjectSchema = Schema;
