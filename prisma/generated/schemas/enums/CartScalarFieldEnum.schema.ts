import { z } from 'zod';

export const CartScalarFieldEnumSchema = z.enum(['id', 'userId', 'musicId']);