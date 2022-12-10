import { z } from 'zod';
import { MusicWhereInputObjectSchema } from './objects/MusicWhereInput.schema';
import { MusicOrderByWithAggregationInputObjectSchema } from './objects/MusicOrderByWithAggregationInput.schema';
import { MusicScalarWhereWithAggregatesInputObjectSchema } from './objects/MusicScalarWhereWithAggregatesInput.schema';
import { MusicScalarFieldEnumSchema } from './enums/MusicScalarFieldEnum.schema';

export const MusicGroupBySchema = z.object({
  where: MusicWhereInputObjectSchema.optional(),
  orderBy: z.union([
    MusicOrderByWithAggregationInputObjectSchema,
    MusicOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: MusicScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MusicScalarFieldEnumSchema),
});
