import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { MusicRelationFilterObjectSchema } from './MusicRelationFilter.schema';
import { MusicWhereInputObjectSchema } from './MusicWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => IssueWhereInputObjectSchema),
        z.lazy(() => IssueWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => IssueWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => IssueWhereInputObjectSchema),
        z.lazy(() => IssueWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    body: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    music: z
      .union([
        z.lazy(() => MusicRelationFilterObjectSchema),
        z.lazy(() => MusicWhereInputObjectSchema),
      ])
      .optional(),
    musicId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const IssueWhereInputObjectSchema = Schema;
