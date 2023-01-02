import { z } from 'zod';
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema';
import { ParticipationCreateWithoutRoleMapInputObjectSchema } from './ParticipationCreateWithoutRoleMapInput.schema';
import { ParticipationUncheckedCreateWithoutRoleMapInputObjectSchema } from './ParticipationUncheckedCreateWithoutRoleMapInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationCreateOrConnectWithoutRoleMapInput> =
  z
    .object({
      where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ParticipationCreateWithoutRoleMapInputObjectSchema),
        z.lazy(
          () => ParticipationUncheckedCreateWithoutRoleMapInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ParticipationCreateOrConnectWithoutRoleMapInputObjectSchema =
  Schema;
