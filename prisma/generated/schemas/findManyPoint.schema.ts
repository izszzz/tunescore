import { z } from 'zod';
import { PointSelectObjectSchema } from './objects/PointSelect.schema';
import { PointIncludeObjectSchema } from './objects/PointInclude.schema';
import { PointOrderByWithRelationInputObjectSchema } from './objects/PointOrderByWithRelationInput.schema';
import { PointWhereInputObjectSchema } from './objects/PointWhereInput.schema';
import { PointWhereUniqueInputObjectSchema } from './objects/PointWhereUniqueInput.schema';
import { PointScalarFieldEnumSchema } from './enums/PointScalarFieldEnum.schema';

export const PointFindManySchema = z.object({
  select: z.lazy(() => PointSelectObjectSchema.optional()),
  include: z.lazy(() => PointIncludeObjectSchema.optional()),
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
