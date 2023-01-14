import { z } from 'zod';
import { AlbumCreateWithoutPointsInputObjectSchema } from './AlbumCreateWithoutPointsInput.schema';
import { AlbumUncheckedCreateWithoutPointsInputObjectSchema } from './AlbumUncheckedCreateWithoutPointsInput.schema';
import { AlbumCreateOrConnectWithoutPointsInputObjectSchema } from './AlbumCreateOrConnectWithoutPointsInput.schema';
import { AlbumUpsertWithoutPointsInputObjectSchema } from './AlbumUpsertWithoutPointsInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithoutPointsInputObjectSchema } from './AlbumUpdateWithoutPointsInput.schema';
import { AlbumUncheckedUpdateWithoutPointsInputObjectSchema } from './AlbumUncheckedUpdateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpdateOneWithoutPointsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AlbumCreateWithoutPointsInputObjectSchema),
        z.lazy(() => AlbumUncheckedCreateWithoutPointsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AlbumCreateOrConnectWithoutPointsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => AlbumUpsertWithoutPointsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => AlbumWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => AlbumUpdateWithoutPointsInputObjectSchema),
        z.lazy(() => AlbumUncheckedUpdateWithoutPointsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const AlbumUpdateOneWithoutPointsNestedInputObjectSchema = Schema;
