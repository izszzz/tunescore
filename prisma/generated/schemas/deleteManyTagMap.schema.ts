import { z } from 'zod';
import { TagMapWhereInputObjectSchema } from './objects/TagMapWhereInput.schema';

export const TagMapDeleteManySchema = z.object({
  where: TagMapWhereInputObjectSchema.optional(),
});
