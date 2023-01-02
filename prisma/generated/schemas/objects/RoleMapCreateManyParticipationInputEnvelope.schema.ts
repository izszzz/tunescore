import { z } from 'zod';
import { RoleMapCreateManyParticipationInputObjectSchema } from './RoleMapCreateManyParticipationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapCreateManyParticipationInputEnvelope> = z
  .object({
    data: z.lazy(() => RoleMapCreateManyParticipationInputObjectSchema).array(),
  })
  .strict();

export const RoleMapCreateManyParticipationInputEnvelopeObjectSchema = Schema;
