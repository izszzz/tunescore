import { z } from 'zod';
import { PurchaseSelectObjectSchema } from './objects/PurchaseSelect.schema';
import { PurchaseIncludeObjectSchema } from './objects/PurchaseInclude.schema';
import { PurchaseWhereUniqueInputObjectSchema } from './objects/PurchaseWhereUniqueInput.schema';
import { PurchaseCreateInputObjectSchema } from './objects/PurchaseCreateInput.schema';
import { PurchaseUncheckedCreateInputObjectSchema } from './objects/PurchaseUncheckedCreateInput.schema';
import { PurchaseUpdateInputObjectSchema } from './objects/PurchaseUpdateInput.schema';
import { PurchaseUncheckedUpdateInputObjectSchema } from './objects/PurchaseUncheckedUpdateInput.schema';

export const PurchaseUpsertSchema = z.object({
  select: PurchaseSelectObjectSchema.optional(),
  include: PurchaseIncludeObjectSchema.optional(),
  where: PurchaseWhereUniqueInputObjectSchema,
  create: z.union([
    PurchaseCreateInputObjectSchema,
    PurchaseUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PurchaseUpdateInputObjectSchema,
    PurchaseUncheckedUpdateInputObjectSchema,
  ]),
});
