import { z } from 'zod';
import { BandUpdateManyMutationInputObjectSchema } from './objects/BandUpdateManyMutationInput.schema';
import { BandWhereInputObjectSchema } from './objects/BandWhereInput.schema';

export const BandUpdateManySchema = z.object({
  data: BandUpdateManyMutationInputObjectSchema,
  where: BandWhereInputObjectSchema.optional(),
});
