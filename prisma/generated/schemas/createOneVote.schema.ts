import { z } from 'zod';
import { VoteSelectObjectSchema } from './objects/VoteSelect.schema';
import { VoteIncludeObjectSchema } from './objects/VoteInclude.schema';
import { VoteCreateInputObjectSchema } from './objects/VoteCreateInput.schema';

export const VoteCreateOneSchema = z.object({
  select: VoteSelectObjectSchema.optional(),
  include: VoteIncludeObjectSchema.optional(),
  data: VoteCreateInputObjectSchema,
});
