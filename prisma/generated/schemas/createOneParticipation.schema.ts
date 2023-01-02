import { z } from 'zod';
import { ParticipationSelectObjectSchema } from './objects/ParticipationSelect.schema';
import { ParticipationIncludeObjectSchema } from './objects/ParticipationInclude.schema';
import { ParticipationCreateInputObjectSchema } from './objects/ParticipationCreateInput.schema';

export const ParticipationCreateOneSchema = z.object({
  select: ParticipationSelectObjectSchema.optional(),
  include: ParticipationIncludeObjectSchema.optional(),
  data: ParticipationCreateInputObjectSchema,
});
