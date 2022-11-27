import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicCreateWithoutBookmarksInputObjectSchema } from './MusicCreateWithoutBookmarksInput.schema';
import { MusicUncheckedCreateWithoutBookmarksInputObjectSchema } from './MusicUncheckedCreateWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateOrConnectWithoutBookmarksInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MusicCreateWithoutBookmarksInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutBookmarksInputObjectSchema),
    ]),
  })
  .strict();

export const MusicCreateOrConnectWithoutBookmarksInputObjectSchema = Schema;
