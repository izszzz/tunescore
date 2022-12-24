import { z } from 'zod';

export const BookmarkScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'resourceId',
  'resourceType',
]);
