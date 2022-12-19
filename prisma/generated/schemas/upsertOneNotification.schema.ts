import { z } from 'zod';
import { NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationIncludeObjectSchema } from './objects/NotificationInclude.schema';
import { NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';
import { NotificationCreateInputObjectSchema } from './objects/NotificationCreateInput.schema';
import { NotificationUpdateInputObjectSchema } from './objects/NotificationUpdateInput.schema';

export const NotificationUpsertSchema = z.object({
  select: NotificationSelectObjectSchema.optional(),
  include: NotificationIncludeObjectSchema.optional(),
  where: NotificationWhereUniqueInputObjectSchema,
  create: NotificationCreateInputObjectSchema,
  update: NotificationUpdateInputObjectSchema,
});
