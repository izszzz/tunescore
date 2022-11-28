import { z } from 'zod';
import { ArtistSelectObjectSchema } from './objects/ArtistSelect.schema';
import { ArtistIncludeObjectSchema } from './objects/ArtistInclude.schema';
import { ArtistWhereInputObjectSchema } from './objects/ArtistWhereInput.schema';
import { ArtistOrderByWithRelationInputObjectSchema } from './objects/ArtistOrderByWithRelationInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema';
import { ArtistScalarFieldEnumSchema } from './enums/ArtistScalarFieldEnum.schema';

export const ArtistFindFirstSchema = z.object({
  select: ArtistSelectObjectSchema.optional(),
  include: ArtistIncludeObjectSchema.optional(),
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
