import { z } from 'zod';
import { ParticipationUpdateWithoutRoleMapInputObjectSchema } from './ParticipationUpdateWithoutRoleMapInput.schema';
import { ParticipationUncheckedUpdateWithoutRoleMapInputObjectSchema } from './ParticipationUncheckedUpdateWithoutRoleMapInput.schema';
import { ParticipationCreateWithoutRoleMapInputObjectSchema } from './ParticipationCreateWithoutRoleMapInput.schema';
import { ParticipationUncheckedCreateWithoutRoleMapInputObjectSchema } from './ParticipationUncheckedCreateWithoutRoleMapInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUpsertWithoutRoleMapInput> = z
  .object({
    update: z.union([
      z.lazy(() => ParticipationUpdateWithoutRoleMapInputObjectSchema),
      z.lazy(() => ParticipationUncheckedUpdateWithoutRoleMapInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ParticipationCreateWithoutRoleMapInputObjectSchema),
      z.lazy(() => ParticipationUncheckedCreateWithoutRoleMapInputObjectSchema),
    ]),
  })
  .strict();

export const ParticipationUpsertWithoutRoleMapInputObjectSchema = Schema;
