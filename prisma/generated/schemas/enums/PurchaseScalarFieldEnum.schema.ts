import { z } from 'zod';

export const PurchaseScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'musicId',
  'stripePaymentIntentId',
]);
