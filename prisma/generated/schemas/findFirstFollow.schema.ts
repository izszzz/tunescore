import { z } from 'zod';
import { FollowSelectObjectSchema } from './objects/FollowSelect.schema';
import { FollowIncludeObjectSchema } from './objects/FollowInclude.schema';
import { FollowWhereInputObjectSchema } from './objects/FollowWhereInput.schema';
import { FollowOrderByWithRelationInputObjectSchema } from './objects/FollowOrderByWithRelationInput.schema';
import { FollowWhereUniqueInputObjectSchema } from './objects/FollowWhereUniqueInput.schema';
import { FollowScalarFieldEnumSchema } from './enums/FollowScalarFieldEnum.schema';

export const FollowFindFirstSchema = z.object({
  select: FollowSelectObjectSchema.optional(),
  include: FollowIncludeObjectSchema.optional(),
  where: FollowWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      FollowOrderByWithRelationInputObjectSchema,
      FollowOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: FollowWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(FollowScalarFieldEnumSchema).optional(),
});
