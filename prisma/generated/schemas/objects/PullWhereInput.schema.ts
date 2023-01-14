import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { PullScoreCompositeFilterObjectSchema } from './PullScoreCompositeFilter.schema';
import { PullScoreObjectEqualityInputObjectSchema } from './PullScoreObjectEqualityInput.schema';
import { EnumPullStatusFilterObjectSchema } from './EnumPullStatusFilter.schema';
import { PullStatusSchema } from '../enums/PullStatus.schema';
import { VoteRelationFilterObjectSchema } from './VoteRelationFilter.schema';
import { VoteWhereInputObjectSchema } from './VoteWhereInput.schema';
import { CommentListRelationFilterObjectSchema } from './CommentListRelationFilter.schema';
import { PointListRelationFilterObjectSchema } from './PointListRelationFilter.schema';
import { MusicRelationFilterObjectSchema } from './MusicRelationFilter.schema';
import { MusicWhereInputObjectSchema } from './MusicWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PullWhereInputObjectSchema),
        z.lazy(() => PullWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PullWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PullWhereInputObjectSchema),
        z.lazy(() => PullWhereInputObjectSchema).array(),
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
    score: z
      .union([
        z.lazy(() => PullScoreCompositeFilterObjectSchema),
        z.lazy(() => PullScoreObjectEqualityInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumPullStatusFilterObjectSchema),
        z.lazy(() => PullStatusSchema),
      ])
      .optional(),
    vote: z
      .union([
        z.lazy(() => VoteRelationFilterObjectSchema),
        z.lazy(() => VoteWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    comments: z.lazy(() => CommentListRelationFilterObjectSchema).optional(),
    points: z.lazy(() => PointListRelationFilterObjectSchema).optional(),
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

export const PullWhereInputObjectSchema = Schema;
