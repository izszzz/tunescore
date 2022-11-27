import { z } from 'zod';
import { BandWhereUniqueInputObjectSchema } from './objects/BandWhereUniqueInput.schema';

export const BandFindUniqueSchema = z.object({
  where: BandWhereUniqueInputObjectSchema,
});
