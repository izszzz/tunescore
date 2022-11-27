import { z } from 'zod';
import { PullWhereInputObjectSchema } from './objects/PullWhereInput.schema';
import { PullOrderByWithRelationInputObjectSchema } from './objects/PullOrderByWithRelationInput.schema';
import { PullWhereUniqueInputObjectSchema } from './objects/PullWhereUniqueInput.schema';
import { PullScalarFieldEnumSchema } from './enums/PullScalarFieldEnum.schema';

export const PullFindFirstSchema = z.object({
  where: PullWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PullOrderByWithRelationInputObjectSchema,
      PullOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: PullWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PullScalarFieldEnumSchema).optional(),
});
