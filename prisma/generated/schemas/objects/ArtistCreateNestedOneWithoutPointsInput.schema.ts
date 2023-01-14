import { z } from 'zod';
import { ArtistCreateWithoutPointsInputObjectSchema } from './ArtistCreateWithoutPointsInput.schema';
import { ArtistUncheckedCreateWithoutPointsInputObjectSchema } from './ArtistUncheckedCreateWithoutPointsInput.schema';
import { ArtistCreateOrConnectWithoutPointsInputObjectSchema } from './ArtistCreateOrConnectWithoutPointsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateNestedOneWithoutPointsInput> = z
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
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ArtistCreateNestedOneWithoutPointsInputObjectSchema = Schema;
