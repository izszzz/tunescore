import { z } from 'zod';
import { ParticipationSelectObjectSchema } from './objects/ParticipationSelect.schema';
import { ParticipationIncludeObjectSchema } from './objects/ParticipationInclude.schema';
import { ParticipationUpdateInputObjectSchema } from './objects/ParticipationUpdateInput.schema';
import { ParticipationWhereUniqueInputObjectSchema } from './objects/ParticipationWhereUniqueInput.schema';

export const ParticipationUpdateOneSchema = z.object({
  select: ParticipationSelectObjectSchema.optional(),
  include: ParticipationIncludeObjectSchema.optional(),
  data: ParticipationUpdateInputObjectSchema,
  where: ParticipationWhereUniqueInputObjectSchema,
});
