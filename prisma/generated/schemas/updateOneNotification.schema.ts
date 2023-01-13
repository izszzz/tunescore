import { z } from 'zod';
import { NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationIncludeObjectSchema } from './objects/NotificationInclude.schema';
import { NotificationUpdateInputObjectSchema } from './objects/NotificationUpdateInput.schema';
import { NotificationUncheckedUpdateInputObjectSchema } from './objects/NotificationUncheckedUpdateInput.schema';
import { NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';

export const NotificationUpdateOneSchema = z.object({
  select: NotificationSelectObjectSchema.optional(),
  include: NotificationIncludeObjectSchema.optional(),
  data: z.union([
    NotificationUpdateInputObjectSchema,
    NotificationUncheckedUpdateInputObjectSchema,
  ]),
  where: NotificationWhereUniqueInputObjectSchema,
});
