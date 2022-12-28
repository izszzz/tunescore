import { z } from 'zod';

export const TagMapScalarFieldEnumSchema = z.enum([
  'id',
  'tagId',
  'resourceId',
  'resourceType',
]);
