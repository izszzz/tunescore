import { z } from 'zod';
import { TagMapUpdateManyMutationInputObjectSchema } from './objects/TagMapUpdateManyMutationInput.schema';
import { TagMapWhereInputObjectSchema } from './objects/TagMapWhereInput.schema';

export const TagMapUpdateManySchema = z.object({
  data: TagMapUpdateManyMutationInputObjectSchema,
  where: TagMapWhereInputObjectSchema.optional(),
});
