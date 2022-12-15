import { z } from 'zod';

export const AlbumScalarFieldEnumSchema = z.enum([
  'id',
  'bandId',
  'musicIDs',
  'artistIDs',
  'userIDs',
]);
