import { z } from 'zod';
import { MusicCreateWithoutComposersInputObjectSchema } from './MusicCreateWithoutComposersInput.schema';
import { MusicUncheckedCreateWithoutComposersInputObjectSchema } from './MusicUncheckedCreateWithoutComposersInput.schema';
import { MusicCreateOrConnectWithoutComposersInputObjectSchema } from './MusicCreateOrConnectWithoutComposersInput.schema';
import { MusicUpsertWithWhereUniqueWithoutComposersInputObjectSchema } from './MusicUpsertWithWhereUniqueWithoutComposersInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithWhereUniqueWithoutComposersInputObjectSchema } from './MusicUpdateWithWhereUniqueWithoutComposersInput.schema';
import { MusicUpdateManyWithWhereWithoutComposersInputObjectSchema } from './MusicUpdateManyWithWhereWithoutComposersInput.schema';
import { MusicScalarWhereInputObjectSchema } from './MusicScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateManyWithoutComposersNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => MusicUpsertWithWhereUniqueWithoutComposersInputObjectSchema,
        ),
        z
          .lazy(
            () => MusicUpsertWithWhereUniqueWithoutComposersInputObjectSchema,
          )
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
        z.lazy(
          () => MusicUpdateWithWhereUniqueWithoutComposersInputObjectSchema,
        ),
        z
          .lazy(
            () => MusicUpdateWithWhereUniqueWithoutComposersInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => MusicUpdateManyWithWhereWithoutComposersInputObjectSchema),
        z
          .lazy(() => MusicUpdateManyWithWhereWithoutComposersInputObjectSchema)
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

export const MusicUpdateManyWithoutComposersNestedInputObjectSchema = Schema;
