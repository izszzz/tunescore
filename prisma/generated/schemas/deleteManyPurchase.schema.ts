import { z } from 'zod';
import { PurchaseWhereInputObjectSchema } from './objects/PurchaseWhereInput.schema';

export const PurchaseDeleteManySchema = z.object({
  where: PurchaseWhereInputObjectSchema.optional(),
});
