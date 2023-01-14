import { z } from 'zod';
import { ArtistCreateWithoutPointsInputObjectSchema } from './ArtistCreateWithoutPointsInput.schema';
import { ArtistUncheckedCreateWithoutPointsInputObjectSchema } from './ArtistUncheckedCreateWithoutPointsInput.schema';
import { ArtistCreateOrConnectWithoutPointsInputObjectSchema } from './ArtistCreateOrConnectWithoutPointsInput.schema';
import { ArtistUpsertWithoutPointsInputObjectSchema } from './ArtistUpsertWithoutPointsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutPointsInputObjectSchema } from './ArtistUpdateWithoutPointsInput.schema';
import { ArtistUncheckedUpdateWithoutPointsInputObjectSchema } from './ArtistUncheckedUpdateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateOneWithoutPointsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtistCreateWithoutPointsInputObjectSchema),
        z.lazy(() => ArtistUncheckedCreateWithoutPointsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ArtistCreateOrConnectWithoutPointsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => ArtistUpsertWithoutPointsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ArtistUpdateWithoutPointsInputObjectSchema),
        z.lazy(() => ArtistUncheckedUpdateWithoutPointsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArtistUpdateOneWithoutPointsNestedInputObjectSchema = Schema;
