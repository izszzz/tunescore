import { z } from 'zod';
import { RoleMapCreateManyRoleInputObjectSchema } from './RoleMapCreateManyRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapCreateManyRoleInputEnvelope> = z
  .object({
    data: z.lazy(() => RoleMapCreateManyRoleInputObjectSchema).array(),
  })
  .strict();

export const RoleMapCreateManyRoleInputEnvelopeObjectSchema = Schema;
