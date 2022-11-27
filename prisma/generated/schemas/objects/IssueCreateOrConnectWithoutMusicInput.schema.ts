import { z } from 'zod';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';
import { IssueCreateWithoutMusicInputObjectSchema } from './IssueCreateWithoutMusicInput.schema';
import { IssueUncheckedCreateWithoutMusicInputObjectSchema } from './IssueUncheckedCreateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateOrConnectWithoutMusicInput> = z
  .object({
    where: z.lazy(() => IssueWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => IssueCreateWithoutMusicInputObjectSchema),
      z.lazy(() => IssueUncheckedCreateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const IssueCreateOrConnectWithoutMusicInputObjectSchema = Schema;
