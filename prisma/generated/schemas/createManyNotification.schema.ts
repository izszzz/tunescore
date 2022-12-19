import { z } from 'zod';
import { NotificationCreateManyInputObjectSchema } from './objects/NotificationCreateManyInput.schema';

export const NotificationCreateManySchema = z.object({
  data: NotificationCreateManyInputObjectSchema,
});
