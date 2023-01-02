import { z } from 'zod';
import { RoleMapUpdateManyMutationInputObjectSchema } from './objects/RoleMapUpdateManyMutationInput.schema';
import { RoleMapWhereInputObjectSchema } from './objects/RoleMapWhereInput.schema';

export const RoleMapUpdateManySchema = z.object({
  data: RoleMapUpdateManyMutationInputObjectSchema,
  where: RoleMapWhereInputObjectSchema.optional(),
});
