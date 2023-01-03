import { z } from 'zod';
import { RoleMapSelectObjectSchema } from './objects/RoleMapSelect.schema';
import { RoleMapIncludeObjectSchema } from './objects/RoleMapInclude.schema';
import { RoleMapUpdateInputObjectSchema } from './objects/RoleMapUpdateInput.schema';
import { RoleMapWhereUniqueInputObjectSchema } from './objects/RoleMapWhereUniqueInput.schema';

export const RoleMapUpdateOneSchema = z.object({
  select: RoleMapSelectObjectSchema.optional(),
  include: RoleMapIncludeObjectSchema.optional(),
  data: RoleMapUpdateInputObjectSchema,
  where: RoleMapWhereUniqueInputObjectSchema,
});