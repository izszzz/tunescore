import { z } from 'zod';

export const TagTypeSchema = z.enum(['Music', 'Band', 'Artist', 'Album']);
