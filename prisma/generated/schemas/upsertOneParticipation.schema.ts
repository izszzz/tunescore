import { z } from 'zod';
import { ParticipationSelectObjectSchema } from './objects/ParticipationSelect.schema';
import { ParticipationIncludeObjectSchema } from './objects/ParticipationInclude.schema';
import { ParticipationWhereUniqueInputObjectSchema } from './objects/ParticipationWhereUniqueInput.schema';
import { ParticipationCreateInputObjectSchema } from './objects/ParticipationCreateInput.schema';
import { ParticipationUpdateInputObjectSchema } from './objects/ParticipationUpdateInput.schema';

export const ParticipationUpsertSchema = z.object({
  select: ParticipationSelectObjectSchema.optional(),
  include: ParticipationIncludeObjectSchema.optional(),
  where: ParticipationWhereUniqueInputObjectSchema,
  create: ParticipationCreateInputObjectSchema,
  update: ParticipationUpdateInputObjectSchema,
});
