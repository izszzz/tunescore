import { z } from 'zod';
import { RoleMapWhereInputObjectSchema } from './objects/RoleMapWhereInput.schema';
import { RoleMapOrderByWithAggregationInputObjectSchema } from './objects/RoleMapOrderByWithAggregationInput.schema';
import { RoleMapScalarWhereWithAggregatesInputObjectSchema } from './objects/RoleMapScalarWhereWithAggregatesInput.schema';
import { RoleMapScalarFieldEnumSchema } from './enums/RoleMapScalarFieldEnum.schema';

export const RoleMapGroupBySchema = z.object({
  where: RoleMapWhereInputObjectSchema.optional(),
  orderBy: z.union([
    RoleMapOrderByWithAggregationInputObjectSchema,
    RoleMapOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: RoleMapScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RoleMapScalarFieldEnumSchema),
});
