import { z } from 'zod';

export const CommentScalarFieldEnumSchema = z.enum([
  'id',
  'body',
  'userId',
  'resourceId',
  'resourceType',
]);
