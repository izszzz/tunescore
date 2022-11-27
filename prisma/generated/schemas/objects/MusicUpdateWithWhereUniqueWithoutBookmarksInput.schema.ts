import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutBookmarksInputObjectSchema } from './MusicUpdateWithoutBookmarksInput.schema';
import { MusicUncheckedUpdateWithoutBookmarksInputObjectSchema } from './MusicUncheckedUpdateWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateWithWhereUniqueWithoutBookmarksInput> =
  z
    .object({
      where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MusicUpdateWithoutBookmarksInputObjectSchema),
        z.lazy(() => MusicUncheckedUpdateWithoutBookmarksInputObjectSchema),
      ]),
    })
    .strict();

export const MusicUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema =
  Schema;
