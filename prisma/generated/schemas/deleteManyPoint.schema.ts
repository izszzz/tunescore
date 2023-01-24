import { z } from 'zod';
import { PointWhereInputObjectSchema } from './objects/PointWhereInput.schema';

export const PointDeleteManySchema = z.object({
  where: PointWhereInputObjectSchema.optional(),
});
