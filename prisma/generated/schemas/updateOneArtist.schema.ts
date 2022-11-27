import { z } from 'zod';
import { ArtistUpdateInputObjectSchema } from './objects/ArtistUpdateInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema';

export const ArtistUpdateOneSchema = z.object({
  data: ArtistUpdateInputObjectSchema,
  where: ArtistWhereUniqueInputObjectSchema,
});
