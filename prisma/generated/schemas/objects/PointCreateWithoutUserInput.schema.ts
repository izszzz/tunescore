import { z } from 'zod';
import { PointActionTypeSchema } from '../enums/PointActionType.schema';
import { MusicCreateNestedOneWithoutPointsInputObjectSchema } from './MusicCreateNestedOneWithoutPointsInput.schema';
import { BandCreateNestedOneWithoutPointsInputObjectSchema } from './BandCreateNestedOneWithoutPointsInput.schema';
import { AlbumCreateNestedOneWithoutPointsInputObjectSchema } from './AlbumCreateNestedOneWithoutPointsInput.schema';
import { ArtistCreateNestedOneWithoutPointsInputObjectSchema } from './ArtistCreateNestedOneWithoutPointsInput.schema';
import { PullCreateNestedOneWithoutPointsInputObjectSchema } from './PullCreateNestedOneWithoutPointsInput.schema';
import { IssueCreateNestedOneWithoutPointsInputObjectSchema } from './IssueCreateNestedOneWithoutPointsInput.schema';
import { PointTypeSchema } from '../enums/PointType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    amount: z.number(),
    actionType: z.lazy(() => PointActionTypeSchema),
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

export const PointCreateWithoutUserInputObjectSchema = Schema;
