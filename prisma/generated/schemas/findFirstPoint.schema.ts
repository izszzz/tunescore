import { z } from 'zod';
import { PointSelectObjectSchema } from './objects/PointSelect.schema';
import { PointIncludeObjectSchema } from './objects/PointInclude.schema';
import { PointOrderByWithRelationInputObjectSchema } from './objects/PointOrderByWithRelationInput.schema';
import { PointWhereInputObjectSchema } from './objects/PointWhereInput.schema';
import { PointWhereUniqueInputObjectSchema } from './objects/PointWhereUniqueInput.schema';
import { PointScalarFieldEnumSchema } from './enums/PointScalarFieldEnum.schema';

export const PointFindFirstSchema = z.object({
  select: PointSelectObjectSchema.optional(),
  include: PointIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      PointOrderByWithRelationInputObjectSchema,
      PointOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PointWhereInputObjectSchema.optional(),
  cursor: PointWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PointScalarFieldEnumSchema).optional(),
});
