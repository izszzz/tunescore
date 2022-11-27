import { z } from 'zod';
import { BandWhereInputObjectSchema } from './objects/BandWhereInput.schema';
import { BandOrderByWithRelationInputObjectSchema } from './objects/BandOrderByWithRelationInput.schema';
import { BandWhereUniqueInputObjectSchema } from './objects/BandWhereUniqueInput.schema';
import { BandScalarFieldEnumSchema } from './enums/BandScalarFieldEnum.schema';

export const BandFindManySchema = z.object({
  where: BandWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BandOrderByWithRelationInputObjectSchema,
      BandOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: BandWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BandScalarFieldEnumSchema).optional(),
});
