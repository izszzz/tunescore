import { z } from 'zod';
import { ArtistCreateWithoutTagMapsInputObjectSchema } from './ArtistCreateWithoutTagMapsInput.schema';
import { ArtistUncheckedCreateWithoutTagMapsInputObjectSchema } from './ArtistUncheckedCreateWithoutTagMapsInput.schema';
import { ArtistCreateOrConnectWithoutTagMapsInputObjectSchema } from './ArtistCreateOrConnectWithoutTagMapsInput.schema';
import { ArtistUpsertWithoutTagMapsInputObjectSchema } from './ArtistUpsertWithoutTagMapsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutTagMapsInputObjectSchema } from './ArtistUpdateWithoutTagMapsInput.schema';
import { ArtistUncheckedUpdateWithoutTagMapsInputObjectSchema } from './ArtistUncheckedUpdateWithoutTagMapsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateOneWithoutTagMapsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtistCreateWithoutTagMapsInputObjectSchema),
        z.lazy(() => ArtistUncheckedCreateWithoutTagMapsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ArtistCreateOrConnectWithoutTagMapsInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => ArtistUpsertWithoutTagMapsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ArtistUpdateWithoutTagMapsInputObjectSchema),
        z.lazy(() => ArtistUncheckedUpdateWithoutTagMapsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArtistUpdateOneWithoutTagMapsNestedInputObjectSchema = Schema;
