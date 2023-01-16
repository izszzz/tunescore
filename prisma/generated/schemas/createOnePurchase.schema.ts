import { z } from 'zod';
import { PurchaseSelectObjectSchema } from './objects/PurchaseSelect.schema';
import { PurchaseIncludeObjectSchema } from './objects/PurchaseInclude.schema';
import { PurchaseCreateInputObjectSchema } from './objects/PurchaseCreateInput.schema';
import { PurchaseUncheckedCreateInputObjectSchema } from './objects/PurchaseUncheckedCreateInput.schema';

export const PurchaseCreateOneSchema = z.object({
  select: PurchaseSelectObjectSchema.optional(),
  include: PurchaseIncludeObjectSchema.optional(),
  data: z.union([
    PurchaseCreateInputObjectSchema,
    PurchaseUncheckedCreateInputObjectSchema,
  ]),
});
