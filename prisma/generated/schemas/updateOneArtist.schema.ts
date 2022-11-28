import { z } from 'zod';
import { ArtistSelectObjectSchema } from './objects/ArtistSelect.schema';
import { ArtistIncludeObjectSchema } from './objects/ArtistInclude.schema';
import { ArtistUpdateInputObjectSchema } from './objects/ArtistUpdateInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema';

export const ArtistUpdateOneSchema = z.object({
  select: ArtistSelectObjectSchema.optional(),
  include: ArtistIncludeObjectSchema.optional(),
  data: ArtistUpdateInputObjectSchema,
  where: ArtistWhereUniqueInputObjectSchema,
});
