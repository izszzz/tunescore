import { z } from 'zod';
import { MusicCreateInputObjectSchema } from './objects/MusicCreateInput.schema';

export const MusicCreateOneSchema = z.object({
  data: MusicCreateInputObjectSchema,
});
