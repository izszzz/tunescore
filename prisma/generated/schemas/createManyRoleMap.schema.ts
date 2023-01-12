import { z } from 'zod';
import { RoleMapCreateManyInputObjectSchema } from './objects/RoleMapCreateManyInput.schema';

export const RoleMapCreateManySchema = z.object({
  data: z.union([
    RoleMapCreateManyInputObjectSchema,
    z.array(RoleMapCreateManyInputObjectSchema),
  ]),
});
