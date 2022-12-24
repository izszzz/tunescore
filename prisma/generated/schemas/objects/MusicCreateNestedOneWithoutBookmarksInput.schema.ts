import { z } from 'zod';
import { MusicCreateWithoutBookmarksInputObjectSchema } from './MusicCreateWithoutBookmarksInput.schema';
import { MusicUncheckedCreateWithoutBookmarksInputObjectSchema } from './MusicUncheckedCreateWithoutBookmarksInput.schema';
import { MusicCreateOrConnectWithoutBookmarksInputObjectSchema } from './MusicCreateOrConnectWithoutBookmarksInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateNestedOneWithoutBookmarksInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MusicCreateWithoutBookmarksInputObjectSchema),
        z.lazy(() => MusicUncheckedCreateWithoutBookmarksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => MusicCreateOrConnectWithoutBookmarksInputObjectSchema)
      .optional(),
    connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const MusicCreateNestedOneWithoutBookmarksInputObjectSchema = Schema;
