import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './objects/MusicWhereUniqueInput.schema';

export const MusicDeleteOneSchema = z.object({
  where: MusicWhereUniqueInputObjectSchema,
});
