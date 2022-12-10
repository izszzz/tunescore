import { z } from 'zod';
import { IssueCreateWithoutUserInputObjectSchema } from './IssueCreateWithoutUserInput.schema';
import { IssueUncheckedCreateWithoutUserInputObjectSchema } from './IssueUncheckedCreateWithoutUserInput.schema';
import { IssueCreateOrConnectWithoutUserInputObjectSchema } from './IssueCreateOrConnectWithoutUserInput.schema';
import { IssueCreateManyUserInputEnvelopeObjectSchema } from './IssueCreateManyUserInputEnvelope.schema';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => IssueCreateWithoutUserInputObjectSchema),
        z.lazy(() => IssueCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => IssueUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => IssueUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => IssueCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => IssueCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => IssueCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => IssueWhereUniqueInputObjectSchema),
        z.lazy(() => IssueWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const IssueCreateNestedManyWithoutUserInputObjectSchema = Schema;
