import { z } from 'zod';
import { IssueCreateWithoutMusicInputObjectSchema } from './IssueCreateWithoutMusicInput.schema';
import { IssueUncheckedCreateWithoutMusicInputObjectSchema } from './IssueUncheckedCreateWithoutMusicInput.schema';
import { IssueCreateOrConnectWithoutMusicInputObjectSchema } from './IssueCreateOrConnectWithoutMusicInput.schema';
import { IssueCreateManyMusicInputEnvelopeObjectSchema } from './IssueCreateManyMusicInputEnvelope.schema';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUncheckedCreateNestedManyWithoutMusicInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => IssueCreateWithoutMusicInputObjectSchema),
          z.lazy(() => IssueCreateWithoutMusicInputObjectSchema).array(),
          z.lazy(() => IssueUncheckedCreateWithoutMusicInputObjectSchema),
          z
            .lazy(() => IssueUncheckedCreateWithoutMusicInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => IssueCreateOrConnectWithoutMusicInputObjectSchema),
          z
            .lazy(() => IssueCreateOrConnectWithoutMusicInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => IssueCreateManyMusicInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => IssueWhereUniqueInputObjectSchema),
          z.lazy(() => IssueWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const IssueUncheckedCreateNestedManyWithoutMusicInputObjectSchema =
  Schema;
