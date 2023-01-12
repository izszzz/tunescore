import { z } from 'zod';
import { MusicCreateManyInputObjectSchema } from './objects/MusicCreateManyInput.schema';

export const MusicCreateManySchema = z.object({
  data: z.union([
    MusicCreateManyInputObjectSchema,
    z.array(MusicCreateManyInputObjectSchema),
  ]),
});
