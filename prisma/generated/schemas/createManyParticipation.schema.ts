import { z } from 'zod';
import { ParticipationCreateManyInputObjectSchema } from './objects/ParticipationCreateManyInput.schema';

export const ParticipationCreateManySchema = z.object({
  data: ParticipationCreateManyInputObjectSchema,
});
