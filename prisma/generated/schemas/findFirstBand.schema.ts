import { z } from 'zod';
import { BandSelectObjectSchema } from './objects/BandSelect.schema';
import { BandIncludeObjectSchema } from './objects/BandInclude.schema';
import { BandOrderByWithRelationInputObjectSchema } from './objects/BandOrderByWithRelationInput.schema';
import { BandWhereInputObjectSchema } from './objects/BandWhereInput.schema';
import { BandWhereUniqueInputObjectSchema } from './objects/BandWhereUniqueInput.schema';
import { BandScalarFieldEnumSchema } from './enums/BandScalarFieldEnum.schema';

export const BandFindFirstSchema = z.object({
  select: BandSelectObjectSchema.optional(),
  include: BandIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      BandOrderByWithRelationInputObjectSchema,
      BandOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BandWhereInputObjectSchema.optional(),
  cursor: BandWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BandScalarFieldEnumSchema).optional(),
});
