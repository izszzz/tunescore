import { z } from 'zod';
import { AlbumCreateWithoutTagMapsInputObjectSchema } from './AlbumCreateWithoutTagMapsInput.schema';
import { AlbumUncheckedCreateWithoutTagMapsInputObjectSchema } from './AlbumUncheckedCreateWithoutTagMapsInput.schema';
import { AlbumCreateOrConnectWithoutTagMapsInputObjectSchema } from './AlbumCreateOrConnectWithoutTagMapsInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateNestedOneWithoutTagMapsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AlbumCreateWithoutTagMapsInputObjectSchema),
        z.lazy(() => AlbumUncheckedCreateWithoutTagMapsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AlbumCreateOrConnectWithoutTagMapsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => AlbumWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const AlbumCreateNestedOneWithoutTagMapsInputObjectSchema = Schema;
