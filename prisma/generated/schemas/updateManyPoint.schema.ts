import { z } from 'zod';
import { PointUpdateManyMutationInputObjectSchema } from './objects/PointUpdateManyMutationInput.schema';
import { PointWhereInputObjectSchema } from './objects/PointWhereInput.schema';

export const PointUpdateManySchema = z.object({
  data: PointUpdateManyMutationInputObjectSchema,
  where: PointWhereInputObjectSchema.optional(),
});
