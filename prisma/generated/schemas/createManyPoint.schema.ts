import { z } from 'zod';
import { PointCreateManyInputObjectSchema } from './objects/PointCreateManyInput.schema';

export const PointCreateManySchema = z.object({
  data: z.union([
    PointCreateManyInputObjectSchema,
    z.array(PointCreateManyInputObjectSchema),
  ]),
});
