import { z } from 'zod';

export const PullScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'body',
  'status',
  'musicId',
  'userId',
]);
