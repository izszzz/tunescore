import { z } from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum([
  'id',
  'type',
  'resourceId',
  'resurceType',
  'createdAt',
  'readAt',
  'userId',
]);
