import { z } from 'zod';
import { MusicCreateWithoutAlbumsInputObjectSchema } from './MusicCreateWithoutAlbumsInput.schema';
import { MusicUncheckedCreateWithoutAlbumsInputObjectSchema } from './MusicUncheckedCreateWithoutAlbumsInput.schema';
import { MusicCreateOrConnectWithoutAlbumsInputObjectSchema } from './MusicCreateOrConnectWithoutAlbumsInput.schema';
import { MusicUpsertWithWhereUniqueWithoutAlbumsInputObjectSchema } from './MusicUpsertWithWhereUniqueWithoutAlbumsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithWhereUniqueWithoutAlbumsInputObjectSchema } from './MusicUpdateWithWhereUniqueWithoutAlbumsInput.schema';
import { MusicUpdateManyWithWhereWithoutAlbumsInputObjectSchema } from './MusicUpdateManyWithWhereWithoutAlbumsInput.schema';
import { MusicScalarWhereInputObjectSchema } from './MusicScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateManyWithoutAlbumsNestedInput> = z
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
    connectOrCreate: z
      .union([
        z.lazy(() => MusicCreateOrConnectWithoutAlbumsInputObjectSchema),
        z
          .lazy(() => MusicCreateOrConnectWithoutAlbumsInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => MusicUpsertWithWhereUniqueWithoutAlbumsInputObjectSchema),
        z
          .lazy(() => MusicUpsertWithWhereUniqueWithoutAlbumsInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => MusicWhereUniqueInputObjectSchema),
        z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => MusicWhereUniqueInputObjectSchema),
        z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => MusicWhereUniqueInputObjectSchema),
        z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => MusicWhereUniqueInputObjectSchema),
        z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => MusicUpdateWithWhereUniqueWithoutAlbumsInputObjectSchema),
        z
          .lazy(() => MusicUpdateWithWhereUniqueWithoutAlbumsInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => MusicUpdateManyWithWhereWithoutAlbumsInputObjectSchema),
        z
          .lazy(() => MusicUpdateManyWithWhereWithoutAlbumsInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => MusicScalarWhereInputObjectSchema),
        z.lazy(() => MusicScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MusicUpdateManyWithoutAlbumsNestedInputObjectSchema = Schema;
