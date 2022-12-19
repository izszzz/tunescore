import { z } from 'zod';
import { NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationIncludeObjectSchema } from './objects/NotificationInclude.schema';
import { NotificationUpdateInputObjectSchema } from './objects/NotificationUpdateInput.schema';
import { NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';

export const NotificationUpdateOneSchema = z.object({
  select: NotificationSelectObjectSchema.optional(),
  include: NotificationIncludeObjectSchema.optional(),
  data: NotificationUpdateInputObjectSchema,
  where: NotificationWhereUniqueInputObjectSchema,
});
