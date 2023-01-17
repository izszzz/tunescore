import { z } from 'zod';
import { PurchaseSelectObjectSchema } from './objects/PurchaseSelect.schema';
import { PurchaseIncludeObjectSchema } from './objects/PurchaseInclude.schema';
import { PurchaseUpdateInputObjectSchema } from './objects/PurchaseUpdateInput.schema';
import { PurchaseUncheckedUpdateInputObjectSchema } from './objects/PurchaseUncheckedUpdateInput.schema';
import { PurchaseWhereUniqueInputObjectSchema } from './objects/PurchaseWhereUniqueInput.schema';

export const PurchaseUpdateOneSchema = z.object({
  select: PurchaseSelectObjectSchema.optional(),
  include: PurchaseIncludeObjectSchema.optional(),
  data: z.union([
    PurchaseUpdateInputObjectSchema,
    PurchaseUncheckedUpdateInputObjectSchema,
  ]),
  where: PurchaseWhereUniqueInputObjectSchema,
});
