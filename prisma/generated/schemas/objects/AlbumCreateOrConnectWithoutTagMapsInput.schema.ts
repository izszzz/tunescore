import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumCreateWithoutTagMapsInputObjectSchema } from './AlbumCreateWithoutTagMapsInput.schema';
import { AlbumUncheckedCreateWithoutTagMapsInputObjectSchema } from './AlbumUncheckedCreateWithoutTagMapsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateOrConnectWithoutTagMapsInput> = z
  .object({
    where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AlbumCreateWithoutTagMapsInputObjectSchema),
      z.lazy(() => AlbumUncheckedCreateWithoutTagMapsInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumCreateOrConnectWithoutTagMapsInputObjectSchema = Schema;
