import { z } from 'zod';
import { PointActionTypeSchema } from '../enums/PointActionType.schema';
import { UserCreateNestedOneWithoutPointsInputObjectSchema } from './UserCreateNestedOneWithoutPointsInput.schema';
import { MusicCreateNestedOneWithoutPointsInputObjectSchema } from './MusicCreateNestedOneWithoutPointsInput.schema';
import { BandCreateNestedOneWithoutPointsInputObjectSchema } from './BandCreateNestedOneWithoutPointsInput.schema';
import { AlbumCreateNestedOneWithoutPointsInputObjectSchema } from './AlbumCreateNestedOneWithoutPointsInput.schema';
import { ArtistCreateNestedOneWithoutPointsInputObjectSchema } from './ArtistCreateNestedOneWithoutPointsInput.schema';
import { IssueCreateNestedOneWithoutPointsInputObjectSchema } from './IssueCreateNestedOneWithoutPointsInput.schema';
import { PointTypeSchema } from '../enums/PointType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateWithoutPullInput> = z
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
    artist: z
      .lazy(() => ArtistCreateNestedOneWithoutPointsInputObjectSchema)
      .optional(),
    issue: z
      .lazy(() => IssueCreateNestedOneWithoutPointsInputObjectSchema)
      .optional(),
    resourceType: z.lazy(() => PointTypeSchema),
    createdAt: z.date().optional(),
  })
  .strict();

export const PointCreateWithoutPullInputObjectSchema = Schema;
