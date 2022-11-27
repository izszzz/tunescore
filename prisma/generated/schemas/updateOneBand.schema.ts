import { z } from 'zod';
import { BandUpdateInputObjectSchema } from './objects/BandUpdateInput.schema';
import { BandWhereUniqueInputObjectSchema } from './objects/BandWhereUniqueInput.schema';

export const BandUpdateOneSchema = z.object({
  data: BandUpdateInputObjectSchema,
  where: BandWhereUniqueInputObjectSchema,
});
