import { z } from 'zod';
import { MusicCreateWithoutComposersInputObjectSchema } from './MusicCreateWithoutComposersInput.schema';
import { MusicUncheckedCreateWithoutComposersInputObjectSchema } from './MusicUncheckedCreateWithoutComposersInput.schema';
import { MusicCreateOrConnectWithoutComposersInputObjectSchema } from './MusicCreateOrConnectWithoutComposersInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUncheckedCreateNestedManyWithoutComposersInput> =
  z.union([
    z
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
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => MusicCreateOrConnectWithoutComposersInputObjectSchema),
            z
              .lazy(() => MusicCreateOrConnectWithoutComposersInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => MusicWhereUniqueInputObjectSchema),
            z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const MusicUncheckedCreateNestedManyWithoutComposersInputObjectSchema =
  Schema;
