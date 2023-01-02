import { z } from 'zod';
import { ParticipationCreateWithoutRoleMapInputObjectSchema } from './ParticipationCreateWithoutRoleMapInput.schema';
import { ParticipationUncheckedCreateWithoutRoleMapInputObjectSchema } from './ParticipationUncheckedCreateWithoutRoleMapInput.schema';
import { ParticipationCreateOrConnectWithoutRoleMapInputObjectSchema } from './ParticipationCreateOrConnectWithoutRoleMapInput.schema';
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationCreateNestedOneWithoutRoleMapInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ParticipationCreateWithoutRoleMapInputObjectSchema),
          z.lazy(
            () => ParticipationUncheckedCreateWithoutRoleMapInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ParticipationCreateOrConnectWithoutRoleMapInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => ParticipationWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ParticipationCreateNestedOneWithoutRoleMapInputObjectSchema =
  Schema;
