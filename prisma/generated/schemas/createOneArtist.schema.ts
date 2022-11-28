import { z } from 'zod';
import { ArtistSelectObjectSchema } from './objects/ArtistSelect.schema';
import { ArtistIncludeObjectSchema } from './objects/ArtistInclude.schema';
import { ArtistCreateInputObjectSchema } from './objects/ArtistCreateInput.schema';

export const ArtistCreateOneSchema = z.object({
  select: ArtistSelectObjectSchema.optional(),
  include: ArtistIncludeObjectSchema.optional(),
  data: ArtistCreateInputObjectSchema,
});
