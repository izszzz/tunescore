import { z } from 'zod';
import { NotificationUpdateManyMutationInputObjectSchema } from './objects/NotificationUpdateManyMutationInput.schema';
import { NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';

export const NotificationUpdateManySchema = z.object({
  data: NotificationUpdateManyMutationInputObjectSchema,
  where: NotificationWhereInputObjectSchema.optional(),
});
