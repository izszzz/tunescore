import { z } from 'zod';

export const PointScalarFieldEnumSchema = z.enum([
  'id',
  'amount',
  'actionType',
  'userId',
  'createdAt',
]);
