import { z } from 'zod';
import { ArtistCreateWithoutTagMapsInputObjectSchema } from './ArtistCreateWithoutTagMapsInput.schema';
import { ArtistUncheckedCreateWithoutTagMapsInputObjectSchema } from './ArtistUncheckedCreateWithoutTagMapsInput.schema';
import { ArtistCreateOrConnectWithoutTagMapsInputObjectSchema } from './ArtistCreateOrConnectWithoutTagMapsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateNestedOneWithoutTagMapsInput> = z
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
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ArtistCreateNestedOneWithoutTagMapsInputObjectSchema = Schema;
