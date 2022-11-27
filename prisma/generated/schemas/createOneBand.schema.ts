import { z } from 'zod';
import { BandCreateInputObjectSchema } from './objects/BandCreateInput.schema';

export const BandCreateOneSchema = z.object({
  data: BandCreateInputObjectSchema,
});
