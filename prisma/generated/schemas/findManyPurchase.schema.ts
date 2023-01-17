import { z } from 'zod';
import { PurchaseSelectObjectSchema } from './objects/PurchaseSelect.schema';
import { PurchaseIncludeObjectSchema } from './objects/PurchaseInclude.schema';
import { PurchaseOrderByWithRelationInputObjectSchema } from './objects/PurchaseOrderByWithRelationInput.schema';
import { PurchaseWhereInputObjectSchema } from './objects/PurchaseWhereInput.schema';
import { PurchaseWhereUniqueInputObjectSchema } from './objects/PurchaseWhereUniqueInput.schema';
import { PurchaseScalarFieldEnumSchema } from './enums/PurchaseScalarFieldEnum.schema';

export const PurchaseFindManySchema = z.object({
  select: z.lazy(() => PurchaseSelectObjectSchema.optional()),
  include: z.lazy(() => PurchaseIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      PurchaseOrderByWithRelationInputObjectSchema,
      PurchaseOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PurchaseWhereInputObjectSchema.optional(),
  cursor: PurchaseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PurchaseScalarFieldEnumSchema).optional(),
});
