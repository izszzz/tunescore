import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutAlbumsInputObjectSchema } from './MusicUpdateWithoutAlbumsInput.schema';
import { MusicUncheckedUpdateWithoutAlbumsInputObjectSchema } from './MusicUncheckedUpdateWithoutAlbumsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateWithWhereUniqueWithoutAlbumsInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => MusicUpdateWithoutAlbumsInputObjectSchema),
      z.lazy(() => MusicUncheckedUpdateWithoutAlbumsInputObjectSchema),
    ]),
  })
  .strict();

export const MusicUpdateWithWhereUniqueWithoutAlbumsInputObjectSchema = Schema;
