import { z } from 'zod';

export const BandScalarFieldEnumSchema = z.enum(['id', 'artistIDs', 'userIDs']);
