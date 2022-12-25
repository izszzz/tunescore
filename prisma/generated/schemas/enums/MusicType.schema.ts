import { z } from 'zod';

export const MusicTypeSchema = z.enum(['ORIGINAL', 'COPY']);
