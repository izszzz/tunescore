import { z } from 'zod';

export const IssueScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'body',
  'status',
  'musicId',
  'userId',
]);
