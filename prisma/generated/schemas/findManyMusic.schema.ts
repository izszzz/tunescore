import { z } from 'zod';
import { MusicWhereInputObjectSchema } from './objects/MusicWhereInput.schema';
import { MusicOrderByWithRelationInputObjectSchema } from './objects/MusicOrderByWithRelationInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './objects/MusicWhereUniqueInput.schema';
import { MusicScalarFieldEnumSchema } from './enums/MusicScalarFieldEnum.schema';

export const MusicFindManySchema = z.object({
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
