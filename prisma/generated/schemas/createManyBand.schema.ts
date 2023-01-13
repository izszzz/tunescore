import { z } from 'zod';
import { BandCreateManyInputObjectSchema } from './objects/BandCreateManyInput.schema';

export const BandCreateManySchema = z.object({
  data: z.union([
    BandCreateManyInputObjectSchema,
    z.array(BandCreateManyInputObjectSchema),
  ]),
});
