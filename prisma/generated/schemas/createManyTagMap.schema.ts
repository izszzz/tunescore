import { z } from 'zod';
import { TagMapCreateManyInputObjectSchema } from './objects/TagMapCreateManyInput.schema';

export const TagMapCreateManySchema = z.object({
  data: z.union([
    TagMapCreateManyInputObjectSchema,
    z.array(TagMapCreateManyInputObjectSchema),
  ]),
});
