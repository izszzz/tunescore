import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema';

export const ArtistFindUniqueSchema = z.object({
  where: ArtistWhereUniqueInputObjectSchema,
});
