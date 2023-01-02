import { z } from 'zod';
import { RoleSelectObjectSchema } from './objects/RoleSelect.schema';
import { RoleIncludeObjectSchema } from './objects/RoleInclude.schema';
import { RoleWhereUniqueInputObjectSchema } from './objects/RoleWhereUniqueInput.schema';
import { RoleCreateInputObjectSchema } from './objects/RoleCreateInput.schema';
import { RoleUpdateInputObjectSchema } from './objects/RoleUpdateInput.schema';

export const RoleUpsertSchema = z.object({
  select: RoleSelectObjectSchema.optional(),
  include: RoleIncludeObjectSchema.optional(),
  where: RoleWhereUniqueInputObjectSchema,
  create: RoleCreateInputObjectSchema,
  update: RoleUpdateInputObjectSchema,
});
