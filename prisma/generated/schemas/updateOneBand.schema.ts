import { z } from 'zod';
import { BandSelectObjectSchema } from './objects/BandSelect.schema';
import { BandIncludeObjectSchema } from './objects/BandInclude.schema';
import { BandUpdateInputObjectSchema } from './objects/BandUpdateInput.schema';
import { BandWhereUniqueInputObjectSchema } from './objects/BandWhereUniqueInput.schema';

export const BandUpdateOneSchema = z.object({
  select: BandSelectObjectSchema.optional(),
  include: BandIncludeObjectSchema.optional(),
  data: BandUpdateInputObjectSchema,
  where: BandWhereUniqueInputObjectSchema,
});
