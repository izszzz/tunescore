import { z } from 'zod';
import { VoteSelectObjectSchema } from './objects/VoteSelect.schema';
import { VoteIncludeObjectSchema } from './objects/VoteInclude.schema';
import { VoteWhereInputObjectSchema } from './objects/VoteWhereInput.schema';
import { VoteOrderByWithRelationInputObjectSchema } from './objects/VoteOrderByWithRelationInput.schema';
import { VoteWhereUniqueInputObjectSchema } from './objects/VoteWhereUniqueInput.schema';
import { VoteScalarFieldEnumSchema } from './enums/VoteScalarFieldEnum.schema';

export const VoteFindFirstSchema = z.object({
  select: VoteSelectObjectSchema.optional(),
  include: VoteIncludeObjectSchema.optional(),
  where: VoteWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VoteOrderByWithRelationInputObjectSchema,
      VoteOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: VoteWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VoteScalarFieldEnumSchema).optional(),
});
