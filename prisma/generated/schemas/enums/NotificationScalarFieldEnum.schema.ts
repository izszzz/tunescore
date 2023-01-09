import { z } from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'resourceId',
  'resourceType',
  'createdAt',
  'readAt',
]);
