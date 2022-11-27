import { z } from 'zod';
import { BandWhereUniqueInputObjectSchema } from './objects/BandWhereUniqueInput.schema';

export const BandDeleteOneSchema = z.object({
  where: BandWhereUniqueInputObjectSchema,
});
