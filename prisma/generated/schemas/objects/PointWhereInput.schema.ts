import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EnumPointActionTypeFilterObjectSchema } from './EnumPointActionTypeFilter.schema';
import { PointActionTypeSchema } from '../enums/PointActionType.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { MusicRelationFilterObjectSchema } from './MusicRelationFilter.schema';
import { MusicWhereInputObjectSchema } from './MusicWhereInput.schema';
import { BandRelationFilterObjectSchema } from './BandRelationFilter.schema';
import { BandWhereInputObjectSchema } from './BandWhereInput.schema';
import { AlbumRelationFilterObjectSchema } from './AlbumRelationFilter.schema';
import { AlbumWhereInputObjectSchema } from './AlbumWhereInput.schema';
import { ArtistRelationFilterObjectSchema } from './ArtistRelationFilter.schema';
import { ArtistWhereInputObjectSchema } from './ArtistWhereInput.schema';
import { PullRelationFilterObjectSchema } from './PullRelationFilter.schema';
import { PullWhereInputObjectSchema } from './PullWhereInput.schema';
import { IssueRelationFilterObjectSchema } from './IssueRelationFilter.schema';
import { IssueWhereInputObjectSchema } from './IssueWhereInput.schema';
import { EnumPointTypeFilterObjectSchema } from './EnumPointTypeFilter.schema';
import { PointTypeSchema } from '../enums/PointType.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PointWhereInputObjectSchema),
        z.lazy(() => PointWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PointWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PointWhereInputObjectSchema),
        z.lazy(() => PointWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    amount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    actionType: z
      .union([
        z.lazy(() => EnumPointActionTypeFilterObjectSchema),
        z.lazy(() => PointActionTypeSchema),
      ])
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
    music: z
      .union([
        z.lazy(() => MusicRelationFilterObjectSchema),
        z.lazy(() => MusicWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    band: z
      .union([
        z.lazy(() => BandRelationFilterObjectSchema),
        z.lazy(() => BandWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    album: z
      .union([
        z.lazy(() => AlbumRelationFilterObjectSchema),
        z.lazy(() => AlbumWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    artist: z
      .union([
        z.lazy(() => ArtistRelationFilterObjectSchema),
        z.lazy(() => ArtistWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    pull: z
      .union([
        z.lazy(() => PullRelationFilterObjectSchema),
        z.lazy(() => PullWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    issue: z
      .union([
        z.lazy(() => IssueRelationFilterObjectSchema),
        z.lazy(() => IssueWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    resourceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => EnumPointTypeFilterObjectSchema),
        z.lazy(() => PointTypeSchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const PointWhereInputObjectSchema = Schema;
