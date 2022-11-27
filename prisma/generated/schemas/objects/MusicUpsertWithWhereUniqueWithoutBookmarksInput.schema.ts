import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutBookmarksInputObjectSchema } from './MusicUpdateWithoutBookmarksInput.schema';
import { MusicUncheckedUpdateWithoutBookmarksInputObjectSchema } from './MusicUncheckedUpdateWithoutBookmarksInput.schema';
import { MusicCreateWithoutBookmarksInputObjectSchema } from './MusicCreateWithoutBookmarksInput.schema';
import { MusicUncheckedCreateWithoutBookmarksInputObjectSchema } from './MusicUncheckedCreateWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpsertWithWhereUniqueWithoutBookmarksInput> =
  z
    .object({
      where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MusicUpdateWithoutBookmarksInputObjectSchema),
        z.lazy(() => MusicUncheckedUpdateWithoutBookmarksInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MusicCreateWithoutBookmarksInputObjectSchema),
        z.lazy(() => MusicUncheckedCreateWithoutBookmarksInputObjectSchema),
      ]),
    })
    .strict();

export const MusicUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema =
  Schema;
