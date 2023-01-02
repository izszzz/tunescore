import { z } from 'zod';
import { RoleMapSelectObjectSchema } from './objects/RoleMapSelect.schema';
import { RoleMapIncludeObjectSchema } from './objects/RoleMapInclude.schema';
import { RoleMapCreateInputObjectSchema } from './objects/RoleMapCreateInput.schema';

export const RoleMapCreateOneSchema = z.object({
  select: RoleMapSelectObjectSchema.optional(),
  include: RoleMapIncludeObjectSchema.optional(),
  data: RoleMapCreateInputObjectSchema,
});
