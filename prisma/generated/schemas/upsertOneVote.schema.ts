import { z } from 'zod';
import { VoteSelectObjectSchema } from './objects/VoteSelect.schema';
import { VoteIncludeObjectSchema } from './objects/VoteInclude.schema';
import { VoteWhereUniqueInputObjectSchema } from './objects/VoteWhereUniqueInput.schema';
import { VoteCreateInputObjectSchema } from './objects/VoteCreateInput.schema';
import { VoteUpdateInputObjectSchema } from './objects/VoteUpdateInput.schema';

export const VoteUpsertSchema = z.object({
  select: VoteSelectObjectSchema.optional(),
  include: VoteIncludeObjectSchema.optional(),
  where: VoteWhereUniqueInputObjectSchema,
  create: VoteCreateInputObjectSchema,
  update: VoteUpdateInputObjectSchema,
});
