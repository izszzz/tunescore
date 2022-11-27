import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumCreateWithoutMusicsInputObjectSchema } from './AlbumCreateWithoutMusicsInput.schema';
import { AlbumUncheckedCreateWithoutMusicsInputObjectSchema } from './AlbumUncheckedCreateWithoutMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateOrConnectWithoutMusicsInput> = z
  .object({
    where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AlbumCreateWithoutMusicsInputObjectSchema),
      z.lazy(() => AlbumUncheckedCreateWithoutMusicsInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumCreateOrConnectWithoutMusicsInputObjectSchema = Schema;
