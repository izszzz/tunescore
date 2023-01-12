import { z } from 'zod';
import { FollowSelectObjectSchema } from './objects/FollowSelect.schema';
import { FollowIncludeObjectSchema } from './objects/FollowInclude.schema';
import { FollowWhereUniqueInputObjectSchema } from './objects/FollowWhereUniqueInput.schema';
import { FollowCreateInputObjectSchema } from './objects/FollowCreateInput.schema';
import { FollowUncheckedCreateInputObjectSchema } from './objects/FollowUncheckedCreateInput.schema';
import { FollowUpdateInputObjectSchema } from './objects/FollowUpdateInput.schema';
import { FollowUncheckedUpdateInputObjectSchema } from './objects/FollowUncheckedUpdateInput.schema';

export const FollowUpsertSchema = z.object({
  select: FollowSelectObjectSchema.optional(),
  include: FollowIncludeObjectSchema.optional(),
  where: FollowWhereUniqueInputObjectSchema,
  create: z.union([
    FollowCreateInputObjectSchema,
    FollowUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    FollowUpdateInputObjectSchema,
    FollowUncheckedUpdateInputObjectSchema,
  ]),
});
