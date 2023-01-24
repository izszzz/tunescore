import { z } from 'zod';

export const PointActionTypeSchema = z.enum([
  'PURCHASE',
  'CONSUME',
  'CONTRIBUTE',
]);
