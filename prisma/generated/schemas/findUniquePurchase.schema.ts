import { z } from 'zod';
import { PurchaseSelectObjectSchema } from './objects/PurchaseSelect.schema';
import { PurchaseIncludeObjectSchema } from './objects/PurchaseInclude.schema';
import { PurchaseWhereUniqueInputObjectSchema } from './objects/PurchaseWhereUniqueInput.schema';

export const PurchaseFindUniqueSchema = z.object({
  select: PurchaseSelectObjectSchema.optional(),
  include: PurchaseIncludeObjectSchema.optional(),
  where: PurchaseWhereUniqueInputObjectSchema,
});
