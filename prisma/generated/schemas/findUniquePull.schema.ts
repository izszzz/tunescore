import { z } from 'zod';
import { PullWhereUniqueInputObjectSchema } from './objects/PullWhereUniqueInput.schema';

export const PullFindUniqueSchema = z.object({
  where: PullWhereUniqueInputObjectSchema,
});
