import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'email',
  'emailVerified',
  'image',
  'followedByIDs',
  'followingIDs',
  'bookmarkMusicIDs',
  'bookmarkArtistIDs',
  'bookmarkBandIDs',
  'bookmarkAlbumIDs',
]);
