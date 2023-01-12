import { z } from 'zod';
import { MusicSelectObjectSchema } from './objects/MusicSelect.schema';
import { MusicIncludeObjectSchema } from './objects/MusicInclude.schema';
import { MusicOrderByWithRelationInputObjectSchema } from './objects/MusicOrderByWithRelationInput.schema';
import { MusicWhereInputObjectSchema } from './objects/MusicWhereInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './objects/MusicWhereUniqueInput.schema';
import { MusicScalarFieldEnumSchema } from './enums/MusicScalarFieldEnum.schema';

export const MusicFindFirstSchema = z.object({
  select: MusicSelectObjectSchema.optional(),
  include: MusicIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      MusicOrderByWithRelationInputObjectSchema,
      MusicOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MusicWhereInputObjectSchema.optional(),
  cursor: MusicWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MusicScalarFieldEnumSchema).optional(),
});
