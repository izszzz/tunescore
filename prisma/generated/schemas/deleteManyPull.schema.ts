import { z } from 'zod';
import { PullWhereInputObjectSchema } from './objects/PullWhereInput.schema';

export const PullDeleteManySchema = z.object({
  where: PullWhereInputObjectSchema.optional(),
});
