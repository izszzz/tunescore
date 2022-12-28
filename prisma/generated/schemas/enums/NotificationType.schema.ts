import { z } from 'zod';

export const NotificationTypeSchema = z.enum(['Follow', 'Bookmark', 'Comment']);
