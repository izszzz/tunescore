import { z } from 'zod';

export const MusicScalarFieldEnumSchema = z.enum([
  'id',
  'type',
  'score',
  'visibility',
  'price',
  'userId',
  'bandId',
  'albumIDs',
  'composerIDs',
  'lyristIDs',
  'artistIDs',
  'userIDs',
]);
