import { z } from 'zod';
import { AlbumCreateWithoutTagMapsInputObjectSchema } from './AlbumCreateWithoutTagMapsInput.schema';
import { AlbumUncheckedCreateWithoutTagMapsInputObjectSchema } from './AlbumUncheckedCreateWithoutTagMapsInput.schema';
import { AlbumCreateOrConnectWithoutTagMapsInputObjectSchema } from './AlbumCreateOrConnectWithoutTagMapsInput.schema';
import { AlbumUpsertWithoutTagMapsInputObjectSchema } from './AlbumUpsertWithoutTagMapsInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithoutTagMapsInputObjectSchema } from './AlbumUpdateWithoutTagMapsInput.schema';
import { AlbumUncheckedUpdateWithoutTagMapsInputObjectSchema } from './AlbumUncheckedUpdateWithoutTagMapsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpdateOneWithoutTagMapsNestedInput> = z
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
    upsert: z.lazy(() => AlbumUpsertWithoutTagMapsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => AlbumWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => AlbumUpdateWithoutTagMapsInputObjectSchema),
        z.lazy(() => AlbumUncheckedUpdateWithoutTagMapsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const AlbumUpdateOneWithoutTagMapsNestedInputObjectSchema = Schema;
