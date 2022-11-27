import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutAlbumsInputObjectSchema } from './MusicUpdateWithoutAlbumsInput.schema';
import { MusicUncheckedUpdateWithoutAlbumsInputObjectSchema } from './MusicUncheckedUpdateWithoutAlbumsInput.schema';
import { MusicCreateWithoutAlbumsInputObjectSchema } from './MusicCreateWithoutAlbumsInput.schema';
import { MusicUncheckedCreateWithoutAlbumsInputObjectSchema } from './MusicUncheckedCreateWithoutAlbumsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpsertWithWhereUniqueWithoutAlbumsInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => MusicUpdateWithoutAlbumsInputObjectSchema),
      z.lazy(() => MusicUncheckedUpdateWithoutAlbumsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MusicCreateWithoutAlbumsInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutAlbumsInputObjectSchema),
    ]),
  })
  .strict();

export const MusicUpsertWithWhereUniqueWithoutAlbumsInputObjectSchema = Schema;
