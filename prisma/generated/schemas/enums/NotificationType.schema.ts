import { z } from 'zod';

export const NotificationTypeSchema = z.enum(['User', 'Bookmark', 'Comment']);
