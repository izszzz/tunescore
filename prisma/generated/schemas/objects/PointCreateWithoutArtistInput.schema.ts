import { z } from 'zod';
import { PointActionTypeSchema } from '../enums/PointActionType.schema';
import { UserCreateNestedOneWithoutPointsInputObjectSchema } from './UserCreateNestedOneWithoutPointsInput.schema';
import { MusicCreateNestedOneWithoutPointsInputObjectSchema } from './MusicCreateNestedOneWithoutPointsInput.schema';
import { BandCreateNestedOneWithoutPointsInputObjectSchema } from './BandCreateNestedOneWithoutPointsInput.schema';
import { AlbumCreateNestedOneWithoutPointsInputObjectSchema } from './AlbumCreateNestedOneWithoutPointsInput.schema';
import { PullCreateNestedOneWithoutPointsInputObjectSchema } from './PullCreateNestedOneWithoutPointsInput.schema';
import { IssueCreateNestedOneWithoutPointsInputObjectSchema } from './IssueCreateNestedOneWithoutPointsInput.schema';
import { PointTypeSchema } from '../enums/PointType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateWithoutArtistInput> = z
  .object({
    id: z.string().optional(),
    amount: z.number(),
    actionType: z.lazy(() => PointActionTypeSchema),
    user: z.lazy(() => UserCreateNestedOneWithoutPointsInputObjectSchema),
    music: z
      .lazy(() => MusicCreateNestedOneWithoutPointsInputObjectSchema)
      .optional(),
    band: z
      .lazy(() => BandCreateNestedOneWithoutPointsInputObjectSchema)
      .optional(),
    album: z
      .lazy(() => AlbumCreateNestedOneWithoutPointsInputObjectSchema)
      .optional(),
    pull: z
      .lazy(() => PullCreateNestedOneWithoutPointsInputObjectSchema)
      .optional(),
    issue: z
      .lazy(() => IssueCreateNestedOneWithoutPointsInputObjectSchema)
      .optional(),
    resourceType: z.lazy(() => PointTypeSchema),
    createdAt: z.date().optional(),
  })
  .strict();

export const PointCreateWithoutArtistInputObjectSchema = Schema;
