import { z } from 'zod';
import { BandSelectObjectSchema } from './objects/BandSelect.schema';
import { BandIncludeObjectSchema } from './objects/BandInclude.schema';
import { BandCreateInputObjectSchema } from './objects/BandCreateInput.schema';

export const BandCreateOneSchema = z.object({
  select: BandSelectObjectSchema.optional(),
  include: BandIncludeObjectSchema.optional(),
  data: BandCreateInputObjectSchema,
});
