import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './objects/MusicWhereUniqueInput.schema';

export const MusicFindUniqueSchema = z.object({
  where: MusicWhereUniqueInputObjectSchema,
});
