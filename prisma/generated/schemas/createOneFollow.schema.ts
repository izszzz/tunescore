import { z } from 'zod';
import { FollowSelectObjectSchema } from './objects/FollowSelect.schema';
import { FollowIncludeObjectSchema } from './objects/FollowInclude.schema';
import { FollowCreateInputObjectSchema } from './objects/FollowCreateInput.schema';
import { FollowUncheckedCreateInputObjectSchema } from './objects/FollowUncheckedCreateInput.schema';

export const FollowCreateOneSchema = z.object({
  select: FollowSelectObjectSchema.optional(),
  include: FollowIncludeObjectSchema.optional(),
  data: z.union([
    FollowCreateInputObjectSchema,
    FollowUncheckedCreateInputObjectSchema,
  ]),
});
