import { z } from 'zod';
import { BandWhereInputObjectSchema } from './objects/BandWhereInput.schema';

export const BandDeleteManySchema = z.object({
  where: BandWhereInputObjectSchema.optional(),
});
