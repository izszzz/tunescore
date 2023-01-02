import { z } from 'zod';
import { RoleMapWhereInputObjectSchema } from './objects/RoleMapWhereInput.schema';

export const RoleMapDeleteManySchema = z.object({
  where: RoleMapWhereInputObjectSchema.optional(),
});
