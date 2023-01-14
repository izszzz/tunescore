import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumCreateWithoutPointsInputObjectSchema } from './AlbumCreateWithoutPointsInput.schema';
import { AlbumUncheckedCreateWithoutPointsInputObjectSchema } from './AlbumUncheckedCreateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateOrConnectWithoutPointsInput> = z
  .object({
    where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AlbumCreateWithoutPointsInputObjectSchema),
      z.lazy(() => AlbumUncheckedCreateWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumCreateOrConnectWithoutPointsInputObjectSchema = Schema;
