import { z } from 'zod';
import { RoleMapOrderByWithRelationInputObjectSchema } from './objects/RoleMapOrderByWithRelationInput.schema';
import { RoleMapWhereInputObjectSchema } from './objects/RoleMapWhereInput.schema';
import { RoleMapWhereUniqueInputObjectSchema } from './objects/RoleMapWhereUniqueInput.schema';
import { RoleMapCountAggregateInputObjectSchema } from './objects/RoleMapCountAggregateInput.schema';
import { RoleMapMinAggregateInputObjectSchema } from './objects/RoleMapMinAggregateInput.schema';
import { RoleMapMaxAggregateInputObjectSchema } from './objects/RoleMapMaxAggregateInput.schema';

export const RoleMapAggregateSchema = z.object({
  orderBy: z
    .union([
      RoleMapOrderByWithRelationInputObjectSchema,
      RoleMapOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RoleMapWhereInputObjectSchema.optional(),
  cursor: RoleMapWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), RoleMapCountAggregateInputObjectSchema])
    .optional(),
  _min: RoleMapMinAggregateInputObjectSchema.optional(),
  _max: RoleMapMaxAggregateInputObjectSchema.optional(),
});
