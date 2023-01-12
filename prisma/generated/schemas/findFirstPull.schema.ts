import { z } from 'zod';
import { PullSelectObjectSchema } from './objects/PullSelect.schema';
import { PullIncludeObjectSchema } from './objects/PullInclude.schema';
import { PullOrderByWithRelationInputObjectSchema } from './objects/PullOrderByWithRelationInput.schema';
import { PullWhereInputObjectSchema } from './objects/PullWhereInput.schema';
import { PullWhereUniqueInputObjectSchema } from './objects/PullWhereUniqueInput.schema';
import { PullScalarFieldEnumSchema } from './enums/PullScalarFieldEnum.schema';

export const PullFindFirstSchema = z.object({
  select: PullSelectObjectSchema.optional(),
  include: PullIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      PullOrderByWithRelationInputObjectSchema,
      PullOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PullWhereInputObjectSchema.optional(),
  cursor: PullWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PullScalarFieldEnumSchema).optional(),
});
