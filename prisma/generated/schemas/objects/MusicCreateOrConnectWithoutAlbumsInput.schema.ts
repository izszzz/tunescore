import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicCreateWithoutAlbumsInputObjectSchema } from './MusicCreateWithoutAlbumsInput.schema';
import { MusicUncheckedCreateWithoutAlbumsInputObjectSchema } from './MusicUncheckedCreateWithoutAlbumsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateOrConnectWithoutAlbumsInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MusicCreateWithoutAlbumsInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutAlbumsInputObjectSchema),
    ]),
  })
  .strict();

export const MusicCreateOrConnectWithoutAlbumsInputObjectSchema = Schema;
