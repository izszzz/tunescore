import { z } from 'zod';
import { NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';

export const NotificationDeleteManySchema = z.object({
  where: NotificationWhereInputObjectSchema.optional(),
});
