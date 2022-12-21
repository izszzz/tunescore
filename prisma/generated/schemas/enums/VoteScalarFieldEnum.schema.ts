import { z } from 'zod';

export const VoteScalarFieldEnumSchema = z.enum([
  'id',
  'start',
  'end',
  'good',
  'bad',
  'pullId',
  'userIDs',
]);
