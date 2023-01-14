import { z } from 'zod';
import { PointSelectObjectSchema } from './objects/PointSelect.schema';
import { PointIncludeObjectSchema } from './objects/PointInclude.schema';
import { PointCreateInputObjectSchema } from './objects/PointCreateInput.schema';
import { PointUncheckedCreateInputObjectSchema } from './objects/PointUncheckedCreateInput.schema';

export const PointCreateOneSchema = z.object({
  select: PointSelectObjectSchema.optional(),
  include: PointIncludeObjectSchema.optional(),
  data: z.union([
    PointCreateInputObjectSchema,
    PointUncheckedCreateInputObjectSchema,
  ]),
});
