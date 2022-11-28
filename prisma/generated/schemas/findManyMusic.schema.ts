import { z } from 'zod';
import { MusicSelectObjectSchema } from './objects/MusicSelect.schema';
import { MusicIncludeObjectSchema } from './objects/MusicInclude.schema';
import { MusicWhereInputObjectSchema } from './objects/MusicWhereInput.schema';
import { MusicOrderByWithRelationInputObjectSchema } from './objects/MusicOrderByWithRelationInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './objects/MusicWhereUniqueInput.schema';
import { MusicScalarFieldEnumSchema } from './enums/MusicScalarFieldEnum.schema';

export const MusicFindManySchema = z.object({
  select: z.lazy(() => MusicSelectObjectSchema.optional()),
  include: z.lazy(() => MusicIncludeObjectSchema.optional()),
  where: MusicWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MusicOrderByWithRelationInputObjectSchema,
      MusicOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: MusicWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MusicScalarFieldEnumSchema).optional(),
});
