import { z } from 'zod';
import { BandSelectObjectSchema } from './objects/BandSelect.schema';
import { BandIncludeObjectSchema } from './objects/BandInclude.schema';
import { BandWhereUniqueInputObjectSchema } from './objects/BandWhereUniqueInput.schema';
import { BandCreateInputObjectSchema } from './objects/BandCreateInput.schema';
import { BandUpdateInputObjectSchema } from './objects/BandUpdateInput.schema';

export const BandUpsertSchema = z.object({
  select: BandSelectObjectSchema.optional(),
  include: BandIncludeObjectSchema.optional(),
  where: BandWhereUniqueInputObjectSchema,
  create: BandCreateInputObjectSchema,
  update: BandUpdateInputObjectSchema,
});
