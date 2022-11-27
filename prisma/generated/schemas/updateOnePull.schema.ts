import { z } from 'zod';
import { PullUpdateInputObjectSchema } from './objects/PullUpdateInput.schema';
import { PullWhereUniqueInputObjectSchema } from './objects/PullWhereUniqueInput.schema';

export const PullUpdateOneSchema = z.object({
  data: PullUpdateInputObjectSchema,
  where: PullWhereUniqueInputObjectSchema,
});
