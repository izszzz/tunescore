import { z } from 'zod';

export const PullStatusSchema = z.enum(['DRAFT', 'OPEN', 'CLOSED', 'MERGED']);
