import { z } from 'zod';
import { BandCreateManyInputObjectSchema } from './objects/BandCreateManyInput.schema';

export const BandCreateManySchema = z.object({
  data: BandCreateManyInputObjectSchema,
});
