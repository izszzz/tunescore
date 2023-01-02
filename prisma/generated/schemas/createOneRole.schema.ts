import { z } from 'zod';
import { RoleSelectObjectSchema } from './objects/RoleSelect.schema';
import { RoleIncludeObjectSchema } from './objects/RoleInclude.schema';
import { RoleCreateInputObjectSchema } from './objects/RoleCreateInput.schema';

export const RoleCreateOneSchema = z.object({
  select: RoleSelectObjectSchema.optional(),
  include: RoleIncludeObjectSchema.optional(),
  data: RoleCreateInputObjectSchema,
});
