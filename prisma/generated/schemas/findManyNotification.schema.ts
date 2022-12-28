import { z } from 'zod';
import { NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationIncludeObjectSchema } from './objects/NotificationInclude.schema';
import { NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';
import { NotificationOrderByWithRelationInputObjectSchema } from './objects/NotificationOrderByWithRelationInput.schema';
import { NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';
import { NotificationScalarFieldEnumSchema } from './enums/NotificationScalarFieldEnum.schema';

export const NotificationFindManySchema = z.object({
  select: z.lazy(() => NotificationSelectObjectSchema.optional()),
  include: z.lazy(() => NotificationIncludeObjectSchema.optional()),
  where: NotificationWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      NotificationOrderByWithRelationInputObjectSchema,
      NotificationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: NotificationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(NotificationScalarFieldEnumSchema).optional(),
});