import { z } from 'zod';

export const BookmarkScalarFieldEnumSchema = z.enum([
  'id',
  'userIDs',
  'resourceId',
  'resourceType',
]);
