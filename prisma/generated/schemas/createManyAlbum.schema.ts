import { z } from 'zod';
import { AlbumCreateManyInputObjectSchema } from './objects/AlbumCreateManyInput.schema';

export const AlbumCreateManySchema = z.object({
  data: z.union([
    AlbumCreateManyInputObjectSchema,
    z.array(AlbumCreateManyInputObjectSchema),
  ]),
});
