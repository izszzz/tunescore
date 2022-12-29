import { z } from 'zod';

export const ThemeTypeSchema = z.enum(['DARK', 'LIGHT']);
