import { z } from 'zod';
import { PurchaseCreateManyInputObjectSchema } from './objects/PurchaseCreateManyInput.schema';

export const PurchaseCreateManySchema = z.object({
  data: z.union([
    PurchaseCreateManyInputObjectSchema,
    z.array(PurchaseCreateManyInputObjectSchema),
  ]),
});
