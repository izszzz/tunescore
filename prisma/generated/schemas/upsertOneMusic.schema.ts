import { z } from 'zod';
import { MusicSelectObjectSchema } from './objects/MusicSelect.schema';
import { MusicIncludeObjectSchema } from './objects/MusicInclude.schema';
import { MusicWhereUniqueInputObjectSchema } from './objects/MusicWhereUniqueInput.schema';
import { MusicCreateInputObjectSchema } from './objects/MusicCreateInput.schema';
import { MusicUncheckedCreateInputObjectSchema } from './objects/MusicUncheckedCreateInput.schema';
import { MusicUpdateInputObjectSchema } from './objects/MusicUpdateInput.schema';
import { MusicUncheckedUpdateInputObjectSchema } from './objects/MusicUncheckedUpdateInput.schema';

export const MusicUpsertSchema = z.object({
  select: MusicSelectObjectSchema.optional(),
  include: MusicIncludeObjectSchema.optional(),
  where: MusicWhereUniqueInputObjectSchema,
  create: z.union([
    MusicCreateInputObjectSchema,
    MusicUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MusicUpdateInputObjectSchema,
    MusicUncheckedUpdateInputObjectSchema,
  ]),
});
