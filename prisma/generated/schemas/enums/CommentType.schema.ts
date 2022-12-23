import { z } from 'zod';

export const CommentTypeSchema = z.enum(['Pull', 'Issue']);
