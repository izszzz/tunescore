import { z } from 'zod';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandCreateWithoutAlbumsInputObjectSchema } from './BandCreateWithoutAlbumsInput.schema';
import { BandUncheckedCreateWithoutAlbumsInputObjectSchema } from './BandUncheckedCreateWithoutAlbumsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCreateOrConnectWithoutAlbumsInput> = z
  .object({
    where: z.lazy(() => BandWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BandCreateWithoutAlbumsInputObjectSchema),
      z.lazy(() => BandUncheckedCreateWithoutAlbumsInputObjectSchema),
    ]),
  })
  .strict();

export const BandCreateOrConnectWithoutAlbumsInputObjectSchema = Schema;
