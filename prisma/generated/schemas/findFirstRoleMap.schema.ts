import { z } from 'zod';
import { RoleMapSelectObjectSchema } from './objects/RoleMapSelect.schema';
import { RoleMapIncludeObjectSchema } from './objects/RoleMapInclude.schema';
import { RoleMapWhereInputObjectSchema } from './objects/RoleMapWhereInput.schema';
import { RoleMapOrderByWithRelationInputObjectSchema } from './objects/RoleMapOrderByWithRelationInput.schema';
import { RoleMapWhereUniqueInputObjectSchema } from './objects/RoleMapWhereUniqueInput.schema';
import { RoleMapScalarFieldEnumSchema } from './enums/RoleMapScalarFieldEnum.schema';

export const RoleMapFindFirstSchema = z.object({
  select: RoleMapSelectObjectSchema.optional(),
  include: RoleMapIncludeObjectSchema.optional(),
  where: RoleMapWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RoleMapOrderByWithRelationInputObjectSchema,
      RoleMapOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: RoleMapWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RoleMapScalarFieldEnumSchema).optional(),
});
