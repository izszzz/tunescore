import { z } from 'zod';
import { FollowCreateManyInputObjectSchema } from './objects/FollowCreateManyInput.schema';

export const FollowCreateManySchema = z.object({
  data: FollowCreateManyInputObjectSchema,
});
