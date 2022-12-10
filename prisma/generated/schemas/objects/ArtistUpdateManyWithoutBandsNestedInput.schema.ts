import { z } from 'zod';
import { ArtistCreateWithoutBandsInputObjectSchema } from './ArtistCreateWithoutBandsInput.schema';
import { ArtistUncheckedCreateWithoutBandsInputObjectSchema } from './ArtistUncheckedCreateWithoutBandsInput.schema';
import { ArtistCreateOrConnectWithoutBandsInputObjectSchema } from './ArtistCreateOrConnectWithoutBandsInput.schema';
import { ArtistUpsertWithWhereUniqueWithoutBandsInputObjectSchema } from './ArtistUpsertWithWhereUniqueWithoutBandsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithWhereUniqueWithoutBandsInputObjectSchema } from './ArtistUpdateWithWhereUniqueWithoutBandsInput.schema';
import { ArtistUpdateManyWithWhereWithoutBandsInputObjectSchema } from './ArtistUpdateManyWithWhereWithoutBandsInput.schema';
import { ArtistScalarWhereInputObjectSchema } from './ArtistScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateManyWithoutBandsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtistCreateWithoutBandsInputObjectSchema),
        z.lazy(() => ArtistCreateWithoutBandsInputObjectSchema).array(),
        z.lazy(() => ArtistUncheckedCreateWithoutBandsInputObjectSchema),
        z
          .lazy(() => ArtistUncheckedCreateWithoutBandsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtistCreateOrConnectWithoutBandsInputObjectSchema),
        z
          .lazy(() => ArtistCreateOrConnectWithoutBandsInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ArtistUpsertWithWhereUniqueWithoutBandsInputObjectSchema),
        z
          .lazy(() => ArtistUpsertWithWhereUniqueWithoutBandsInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ArtistWhereUniqueInputObjectSchema),
        z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ArtistWhereUniqueInputObjectSchema),
        z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ArtistWhereUniqueInputObjectSchema),
        z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ArtistWhereUniqueInputObjectSchema),
        z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ArtistUpdateWithWhereUniqueWithoutBandsInputObjectSchema),
        z
          .lazy(() => ArtistUpdateWithWhereUniqueWithoutBandsInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ArtistUpdateManyWithWhereWithoutBandsInputObjectSchema),
        z
          .lazy(() => ArtistUpdateManyWithWhereWithoutBandsInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ArtistScalarWhereInputObjectSchema),
        z.lazy(() => ArtistScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtistUpdateManyWithoutBandsNestedInputObjectSchema = Schema;
