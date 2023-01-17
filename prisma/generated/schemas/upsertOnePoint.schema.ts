import { z } from 'zod';
import { PointSelectObjectSchema } from './objects/PointSelect.schema';
import { PointIncludeObjectSchema } from './objects/PointInclude.schema';
import { PointWhereUniqueInputObjectSchema } from './objects/PointWhereUniqueInput.schema';
import { PointCreateInputObjectSchema } from './objects/PointCreateInput.schema';
import { PointUncheckedCreateInputObjectSchema } from './objects/PointUncheckedCreateInput.schema';
import { PointUpdateInputObjectSchema } from './objects/PointUpdateInput.schema';
import { PointUncheckedUpdateInputObjectSchema } from './objects/PointUncheckedUpdateInput.schema';

export const PointUpsertSchema = z.object({
  select: PointSelectObjectSchema.optional(),
  include: PointIncludeObjectSchema.optional(),
  where: PointWhereUniqueInputObjectSchema,
  create: z.union([
    PointCreateInputObjectSchema,
    PointUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PointUpdateInputObjectSchema,
    PointUncheckedUpdateInputObjectSchema,
  ]),
});
