import { z } from 'zod';
import { BandWhereInputObjectSchema } from './objects/BandWhereInput.schema';
import { BandOrderByWithAggregationInputObjectSchema } from './objects/BandOrderByWithAggregationInput.schema';
import { BandScalarWhereWithAggregatesInputObjectSchema } from './objects/BandScalarWhereWithAggregatesInput.schema';
import { BandScalarFieldEnumSchema } from './enums/BandScalarFieldEnum.schema';

export const BandGroupBySchema = z.object({
  where: BandWhereInputObjectSchema.optional(),
  orderBy: z.union([
    BandOrderByWithAggregationInputObjectSchema,
    BandOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: BandScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(BandScalarFieldEnumSchema),
});
