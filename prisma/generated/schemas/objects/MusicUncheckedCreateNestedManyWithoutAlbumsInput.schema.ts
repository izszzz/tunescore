import { z } from 'zod';
import { MusicCreateWithoutAlbumsInputObjectSchema } from './MusicCreateWithoutAlbumsInput.schema';
import { MusicUncheckedCreateWithoutAlbumsInputObjectSchema } from './MusicUncheckedCreateWithoutAlbumsInput.schema';
import { MusicCreateOrConnectWithoutAlbumsInputObjectSchema } from './MusicCreateOrConnectWithoutAlbumsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUncheckedCreateNestedManyWithoutAlbumsInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => MusicCreateWithoutAlbumsInputObjectSchema),
            z.lazy(() => MusicCreateWithoutAlbumsInputObjectSchema).array(),
            z.lazy(() => MusicUncheckedCreateWithoutAlbumsInputObjectSchema),
            z
              .lazy(() => MusicUncheckedCreateWithoutAlbumsInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => MusicCreateOrConnectWithoutAlbumsInputObjectSchema),
            z
              .lazy(() => MusicCreateOrConnectWithoutAlbumsInputObjectSchema)
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

export const MusicUncheckedCreateNestedManyWithoutAlbumsInputObjectSchema =
  Schema;
