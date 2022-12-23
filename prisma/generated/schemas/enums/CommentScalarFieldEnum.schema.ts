import { z } from 'zod';

export const CommentScalarFieldEnumSchema = z.enum([
  'id',
  'body',
  'resourceId',
  'resurceType',
]);
