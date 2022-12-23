import { z } from 'zod';
import { CommentSelectObjectSchema } from './objects/CommentSelect.schema';
import { CommentIncludeObjectSchema } from './objects/CommentInclude.schema';
import { CommentWhereInputObjectSchema } from './objects/CommentWhereInput.schema';
import { CommentOrderByWithRelationInputObjectSchema } from './objects/CommentOrderByWithRelationInput.schema';
import { CommentWhereUniqueInputObjectSchema } from './objects/CommentWhereUniqueInput.schema';
import { CommentScalarFieldEnumSchema } from './enums/CommentScalarFieldEnum.schema';

export const CommentFindFirstSchema = z.object({
  select: CommentSelectObjectSchema.optional(),
  include: CommentIncludeObjectSchema.optional(),
  where: CommentWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      CommentOrderByWithRelationInputObjectSchema,
      CommentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: CommentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CommentScalarFieldEnumSchema).optional(),
});
