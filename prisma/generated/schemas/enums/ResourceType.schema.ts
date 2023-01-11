import { z } from 'zod';

export const ResourceTypeSchema = z.enum(['Music', 'Band', 'Artist', 'Album']);
