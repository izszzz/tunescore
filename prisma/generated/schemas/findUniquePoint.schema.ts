import { z } from 'zod';
import { PointSelectObjectSchema } from './objects/PointSelect.schema';
import { PointIncludeObjectSchema } from './objects/PointInclude.schema';
import { PointWhereUniqueInputObjectSchema } from './objects/PointWhereUniqueInput.schema';

export const PointFindUniqueSchema = z.object({
  select: PointSelectObjectSchema.optional(),
  include: PointIncludeObjectSchema.optional(),
  where: PointWhereUniqueInputObjectSchema,
});
