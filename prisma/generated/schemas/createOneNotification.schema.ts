import { z } from 'zod';
import { NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationIncludeObjectSchema } from './objects/NotificationInclude.schema';
import { NotificationCreateInputObjectSchema } from './objects/NotificationCreateInput.schema';

export const NotificationCreateOneSchema = z.object({
  select: NotificationSelectObjectSchema.optional(),
  include: NotificationIncludeObjectSchema.optional(),
  data: NotificationCreateInputObjectSchema,
});
