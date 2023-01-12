import { z } from 'zod';
import { MusicSelectObjectSchema } from './objects/MusicSelect.schema';
import { MusicIncludeObjectSchema } from './objects/MusicInclude.schema';
import { MusicUpdateInputObjectSchema } from './objects/MusicUpdateInput.schema';
import { MusicUncheckedUpdateInputObjectSchema } from './objects/MusicUncheckedUpdateInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './objects/MusicWhereUniqueInput.schema';

export const MusicUpdateOneSchema = z.object({
  select: MusicSelectObjectSchema.optional(),
  include: MusicIncludeObjectSchema.optional(),
  data: z.union([
    MusicUpdateInputObjectSchema,
    MusicUncheckedUpdateInputObjectSchema,
  ]),
  where: MusicWhereUniqueInputObjectSchema,
});
