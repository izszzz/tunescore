import { z } from 'zod';

export const IssueStatusSchema = z.enum(['OPEN', 'CLOSE']);
