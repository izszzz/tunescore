import { z } from 'zod';
import { ArtistWhereInputObjectSchema } from './objects/ArtistWhereInput.schema';
import { ArtistOrderByWithRelationInputObjectSchema } from './objects/ArtistOrderByWithRelationInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema';
import { ArtistScalarFieldEnumSchema } from './enums/ArtistScalarFieldEnum.schema';

export const ArtistFindManySchema = z.object({
  where: ArtistWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ArtistOrderByWithRelationInputObjectSchema,
      ArtistOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: ArtistWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ArtistScalarFieldEnumSchema).optional(),
});
