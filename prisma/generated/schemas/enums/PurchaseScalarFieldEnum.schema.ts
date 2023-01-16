import { z } from 'zod';

export const PurchaseScalarFieldEnumSchema = z.enum([
  'id',
  'stripePaymentIntentId',
  'userId',
  'musicId',
]);
