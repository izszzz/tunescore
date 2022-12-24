import { z } from 'zod';

export const ArtistScalarFieldEnumSchema = z.enum([
  'id',
  'writtenMusicsIDs',
  'composedMusicsIDs',
  'musicIDs',
  'bandIDs',
  'albumIDs',
]);
