import { z } from 'zod';
import { TagMapCreateManyInputObjectSchema } from './objects/TagMapCreateManyInput.schema';

export const TagMapCreateManySchema = z.object({
  data: TagMapCreateManyInputObjectSchema,
});
