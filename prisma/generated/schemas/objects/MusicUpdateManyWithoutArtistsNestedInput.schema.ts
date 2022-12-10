import { z } from 'zod';
import { MusicCreateWithoutArtistsInputObjectSchema } from './MusicCreateWithoutArtistsInput.schema';
import { MusicUncheckedCreateWithoutArtistsInputObjectSchema } from './MusicUncheckedCreateWithoutArtistsInput.schema';
import { MusicCreateOrConnectWithoutArtistsInputObjectSchema } from './MusicCreateOrConnectWithoutArtistsInput.schema';
import { MusicUpsertWithWhereUniqueWithoutArtistsInputObjectSchema } from './MusicUpsertWithWhereUniqueWithoutArtistsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithWhereUniqueWithoutArtistsInputObjectSchema } from './MusicUpdateWithWhereUniqueWithoutArtistsInput.schema';
import { MusicUpdateManyWithWhereWithoutArtistsInputObjectSchema } from './MusicUpdateManyWithWhereWithoutArtistsInput.schema';
import { MusicScalarWhereInputObjectSchema } from './MusicScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateManyWithoutArtistsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MusicCreateWithoutArtistsInputObjectSchema),
        z.lazy(() => MusicCreateWithoutArtistsInputObjectSchema).array(),
        z.lazy(() => MusicUncheckedCreateWithoutArtistsInputObjectSchema),
        z
          .lazy(() => MusicUncheckedCreateWithoutArtistsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MusicCreateOrConnectWithoutArtistsInputObjectSchema),
        z
          .lazy(() => MusicCreateOrConnectWithoutArtistsInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => MusicUpsertWithWhereUniqueWithoutArtistsInputObjectSchema),
        z
          .lazy(() => MusicUpsertWithWhereUniqueWithoutArtistsInputObjectSchema)
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
        z.lazy(() => MusicUpdateWithWhereUniqueWithoutArtistsInputObjectSchema),
        z
          .lazy(() => MusicUpdateWithWhereUniqueWithoutArtistsInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => MusicUpdateManyWithWhereWithoutArtistsInputObjectSchema),
        z
          .lazy(() => MusicUpdateManyWithWhereWithoutArtistsInputObjectSchema)
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

export const MusicUpdateManyWithoutArtistsNestedInputObjectSchema = Schema;
