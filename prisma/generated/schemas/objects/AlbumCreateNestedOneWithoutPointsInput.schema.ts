import { z } from 'zod';
import { AlbumCreateWithoutPointsInputObjectSchema } from './AlbumCreateWithoutPointsInput.schema';
import { AlbumUncheckedCreateWithoutPointsInputObjectSchema } from './AlbumUncheckedCreateWithoutPointsInput.schema';
import { AlbumCreateOrConnectWithoutPointsInputObjectSchema } from './AlbumCreateOrConnectWithoutPointsInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateNestedOneWithoutPointsInput> = z
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
    connect: z.lazy(() => AlbumWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const AlbumCreateNestedOneWithoutPointsInputObjectSchema = Schema;
