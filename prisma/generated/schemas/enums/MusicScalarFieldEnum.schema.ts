import { z } from 'zod';

export const MusicScalarFieldEnumSchema = z.enum([
  'id',
  'type',
  'score',
  'visibility',
  'image',
  'price',
  'userId',
  'bandId',
  'albumIDs',
  'composerIDs',
  'lyristIDs',
  'artistIDs',
  'userIDs',
]);
