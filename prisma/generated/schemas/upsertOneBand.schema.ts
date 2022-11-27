import { z } from 'zod';
import { BandWhereUniqueInputObjectSchema } from './objects/BandWhereUniqueInput.schema';
import { BandCreateInputObjectSchema } from './objects/BandCreateInput.schema';
import { BandUpdateInputObjectSchema } from './objects/BandUpdateInput.schema';

export const BandUpsertSchema = z.object({
  where: BandWhereUniqueInputObjectSchema,
  create: BandCreateInputObjectSchema,
  update: BandUpdateInputObjectSchema,
});
