import { z } from 'zod';
import { RoleMapSelectObjectSchema } from './objects/RoleMapSelect.schema';
import { RoleMapIncludeObjectSchema } from './objects/RoleMapInclude.schema';
import { RoleMapWhereUniqueInputObjectSchema } from './objects/RoleMapWhereUniqueInput.schema';

export const RoleMapDeleteOneSchema = z.object({
  select: RoleMapSelectObjectSchema.optional(),
  include: RoleMapIncludeObjectSchema.optional(),
  where: RoleMapWhereUniqueInputObjectSchema,
});
