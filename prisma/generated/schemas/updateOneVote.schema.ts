import { z } from 'zod';
import { VoteSelectObjectSchema } from './objects/VoteSelect.schema';
import { VoteIncludeObjectSchema } from './objects/VoteInclude.schema';
import { VoteUpdateInputObjectSchema } from './objects/VoteUpdateInput.schema';
import { VoteWhereUniqueInputObjectSchema } from './objects/VoteWhereUniqueInput.schema';

export const VoteUpdateOneSchema = z.object({
  select: VoteSelectObjectSchema.optional(),
  include: VoteIncludeObjectSchema.optional(),
  data: VoteUpdateInputObjectSchema,
  where: VoteWhereUniqueInputObjectSchema,
});
