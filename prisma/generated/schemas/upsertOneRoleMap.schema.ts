import { z } from 'zod';
import { RoleMapSelectObjectSchema } from './objects/RoleMapSelect.schema';
import { RoleMapIncludeObjectSchema } from './objects/RoleMapInclude.schema';
import { RoleMapWhereUniqueInputObjectSchema } from './objects/RoleMapWhereUniqueInput.schema';
import { RoleMapCreateInputObjectSchema } from './objects/RoleMapCreateInput.schema';
import { RoleMapUpdateInputObjectSchema } from './objects/RoleMapUpdateInput.schema';

export const RoleMapUpsertSchema = z.object({
  select: RoleMapSelectObjectSchema.optional(),
  include: RoleMapIncludeObjectSchema.optional(),
  where: RoleMapWhereUniqueInputObjectSchema,
  create: RoleMapCreateInputObjectSchema,
  update: RoleMapUpdateInputObjectSchema,
});
