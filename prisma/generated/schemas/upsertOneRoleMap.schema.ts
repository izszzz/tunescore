import { z } from 'zod';
import { RoleMapSelectObjectSchema } from './objects/RoleMapSelect.schema';
import { RoleMapIncludeObjectSchema } from './objects/RoleMapInclude.schema';
import { RoleMapWhereUniqueInputObjectSchema } from './objects/RoleMapWhereUniqueInput.schema';
import { RoleMapCreateInputObjectSchema } from './objects/RoleMapCreateInput.schema';
import { RoleMapUncheckedCreateInputObjectSchema } from './objects/RoleMapUncheckedCreateInput.schema';
import { RoleMapUpdateInputObjectSchema } from './objects/RoleMapUpdateInput.schema';
import { RoleMapUncheckedUpdateInputObjectSchema } from './objects/RoleMapUncheckedUpdateInput.schema';

export const RoleMapUpsertSchema = z.object({
  select: RoleMapSelectObjectSchema.optional(),
  include: RoleMapIncludeObjectSchema.optional(),
  where: RoleMapWhereUniqueInputObjectSchema,
  create: z.union([
    RoleMapCreateInputObjectSchema,
    RoleMapUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RoleMapUpdateInputObjectSchema,
    RoleMapUncheckedUpdateInputObjectSchema,
  ]),
});
