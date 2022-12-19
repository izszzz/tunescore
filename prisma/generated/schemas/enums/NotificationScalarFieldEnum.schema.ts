import { z } from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum([
  'id',
  'type',
  'createdAt',
  'readAt',
  'userId',
]);
