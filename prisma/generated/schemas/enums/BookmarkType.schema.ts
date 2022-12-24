import { z } from 'zod';

export const BookmarkTypeSchema = z.enum(['Music', 'Band', 'Artist', 'Album']);
