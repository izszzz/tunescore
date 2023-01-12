import { z } from 'zod';
import { NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationIncludeObjectSchema } from './objects/NotificationInclude.schema';
import { NotificationCreateInputObjectSchema } from './objects/NotificationCreateInput.schema';
import { NotificationUncheckedCreateInputObjectSchema } from './objects/NotificationUncheckedCreateInput.schema';

export const NotificationCreateOneSchema = z.object({
  select: NotificationSelectObjectSchema.optional(),
  include: NotificationIncludeObjectSchema.optional(),
  data: z.union([
    NotificationCreateInputObjectSchema,
    NotificationUncheckedCreateInputObjectSchema,
  ]),
});
