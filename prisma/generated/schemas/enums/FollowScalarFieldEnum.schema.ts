import { z } from 'zod';

export const FollowScalarFieldEnumSchema = z.enum([
  'id',
  'followerId',
  'followingId',
]);
