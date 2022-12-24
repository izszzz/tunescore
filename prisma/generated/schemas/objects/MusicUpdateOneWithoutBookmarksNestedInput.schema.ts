import { z } from 'zod';
import { MusicCreateWithoutBookmarksInputObjectSchema } from './MusicCreateWithoutBookmarksInput.schema';
import { MusicUncheckedCreateWithoutBookmarksInputObjectSchema } from './MusicUncheckedCreateWithoutBookmarksInput.schema';
import { MusicCreateOrConnectWithoutBookmarksInputObjectSchema } from './MusicCreateOrConnectWithoutBookmarksInput.schema';
import { MusicUpsertWithoutBookmarksInputObjectSchema } from './MusicUpsertWithoutBookmarksInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutBookmarksInputObjectSchema } from './MusicUpdateWithoutBookmarksInput.schema';
import { MusicUncheckedUpdateWithoutBookmarksInputObjectSchema } from './MusicUncheckedUpdateWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateOneWithoutBookmarksNestedInput> = z
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
    upsert: z
      .lazy(() => MusicUpsertWithoutBookmarksInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => MusicUpdateWithoutBookmarksInputObjectSchema),
        z.lazy(() => MusicUncheckedUpdateWithoutBookmarksInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const MusicUpdateOneWithoutBookmarksNestedInputObjectSchema = Schema;
