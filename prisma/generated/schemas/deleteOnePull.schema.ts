import { z } from 'zod';
import { PullWhereUniqueInputObjectSchema } from './objects/PullWhereUniqueInput.schema';

export const PullDeleteOneSchema = z.object({
  where: PullWhereUniqueInputObjectSchema,
});
