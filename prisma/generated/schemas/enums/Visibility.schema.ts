import { z } from 'zod';

export const VisibilitySchema = z.enum(['PUBLIC', 'PRIVATE']);
