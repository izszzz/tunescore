import { z } from 'zod';

export const PointTypeSchema = z.enum([
  'Music',
  'Band',
  'Artist',
  'Album',
  'Pull',
  'Issue',
]);
