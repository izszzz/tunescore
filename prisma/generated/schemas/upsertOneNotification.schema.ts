import { z } from 'zod';
import { NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationIncludeObjectSchema } from './objects/NotificationInclude.schema';
import { NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';
import { NotificationCreateInputObjectSchema } from './objects/NotificationCreateInput.schema';
import { NotificationUncheckedCreateInputObjectSchema } from './objects/NotificationUncheckedCreateInput.schema';
import { NotificationUpdateInputObjectSchema } from './objects/NotificationUpdateInput.schema';
import { NotificationUncheckedUpdateInputObjectSchema } from './objects/NotificationUncheckedUpdateInput.schema';

export const NotificationUpsertSchema = z.object({
  select: NotificationSelectObjectSchema.optional(),
  include: NotificationIncludeObjectSchema.optional(),
  where: NotificationWhereUniqueInputObjectSchema,
  create: z.union([
    NotificationCreateInputObjectSchema,
    NotificationUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    NotificationUpdateInputObjectSchema,
    NotificationUncheckedUpdateInputObjectSchema,
  ]),
});
