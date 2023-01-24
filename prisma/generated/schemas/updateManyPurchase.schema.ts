import { z } from 'zod';
import { PurchaseUpdateManyMutationInputObjectSchema } from './objects/PurchaseUpdateManyMutationInput.schema';
import { PurchaseWhereInputObjectSchema } from './objects/PurchaseWhereInput.schema';

export const PurchaseUpdateManySchema = z.object({
  data: PurchaseUpdateManyMutationInputObjectSchema,
  where: PurchaseWhereInputObjectSchema.optional(),
});
