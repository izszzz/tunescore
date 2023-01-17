import { z } from 'zod';
import { PointSelectObjectSchema } from './objects/PointSelect.schema';
import { PointIncludeObjectSchema } from './objects/PointInclude.schema';
import { PointUpdateInputObjectSchema } from './objects/PointUpdateInput.schema';
import { PointUncheckedUpdateInputObjectSchema } from './objects/PointUncheckedUpdateInput.schema';
import { PointWhereUniqueInputObjectSchema } from './objects/PointWhereUniqueInput.schema';

export const PointUpdateOneSchema = z.object({
  select: PointSelectObjectSchema.optional(),
  include: PointIncludeObjectSchema.optional(),
  data: z.union([
    PointUpdateInputObjectSchema,
    PointUncheckedUpdateInputObjectSchema,
  ]),
  where: PointWhereUniqueInputObjectSchema,
});
