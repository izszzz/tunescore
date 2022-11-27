import { z } from 'zod';
import { MusicUpdateInputObjectSchema } from './objects/MusicUpdateInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './objects/MusicWhereUniqueInput.schema';

export const MusicUpdateOneSchema = z.object({
  data: MusicUpdateInputObjectSchema,
  where: MusicWhereUniqueInputObjectSchema,
});
