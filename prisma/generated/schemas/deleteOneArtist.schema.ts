import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema';

export const ArtistDeleteOneSchema = z.object({
  where: ArtistWhereUniqueInputObjectSchema,
});
