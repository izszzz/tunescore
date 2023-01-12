import { z } from 'zod';
import { FollowCreateManyInputObjectSchema } from './objects/FollowCreateManyInput.schema';

export const FollowCreateManySchema = z.object({
  data: z.union([
    FollowCreateManyInputObjectSchema,
    z.array(FollowCreateManyInputObjectSchema),
  ]),
});
