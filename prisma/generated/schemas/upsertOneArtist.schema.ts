import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema';
import { ArtistCreateInputObjectSchema } from './objects/ArtistCreateInput.schema';
import { ArtistUpdateInputObjectSchema } from './objects/ArtistUpdateInput.schema';

export const ArtistUpsertSchema = z.object({
  where: ArtistWhereUniqueInputObjectSchema,
  create: ArtistCreateInputObjectSchema,
  update: ArtistUpdateInputObjectSchema,
});
