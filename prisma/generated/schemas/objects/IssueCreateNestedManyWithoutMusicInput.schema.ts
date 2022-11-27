import { z } from 'zod';
import { IssueCreateWithoutMusicInputObjectSchema } from './IssueCreateWithoutMusicInput.schema';
import { IssueUncheckedCreateWithoutMusicInputObjectSchema } from './IssueUncheckedCreateWithoutMusicInput.schema';
import { IssueCreateOrConnectWithoutMusicInputObjectSchema } from './IssueCreateOrConnectWithoutMusicInput.schema';
import { IssueCreateManyMusicInputEnvelopeObjectSchema } from './IssueCreateManyMusicInputEnvelope.schema';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateNestedManyWithoutMusicInput> =
  z.union([
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
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => IssueCreateOrConnectWithoutMusicInputObjectSchema),
            z
              .lazy(() => IssueCreateOrConnectWithoutMusicInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => IssueCreateManyMusicInputEnvelopeObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => IssueWhereUniqueInputObjectSchema),
            z.lazy(() => IssueWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const IssueCreateNestedManyWithoutMusicInputObjectSchema = Schema;
