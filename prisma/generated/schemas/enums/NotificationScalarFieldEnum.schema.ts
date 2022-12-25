import { z } from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'resourceId',
  'resurceType',
  'createdAt',
  'readAt',
]);
