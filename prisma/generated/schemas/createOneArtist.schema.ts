import { z } from 'zod';
import { ArtistCreateInputObjectSchema } from './objects/ArtistCreateInput.schema';

export const ArtistCreateOneSchema = z.object({
  data: ArtistCreateInputObjectSchema,
});
