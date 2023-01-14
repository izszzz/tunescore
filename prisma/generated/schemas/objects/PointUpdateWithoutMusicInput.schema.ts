import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { PointActionTypeSchema } from '../enums/PointActionType.schema';
import { EnumPointActionTypeFieldUpdateOperationsInputObjectSchema } from './EnumPointActionTypeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPointsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPointsNestedInput.schema';
import { BandUpdateOneWithoutPointsNestedInputObjectSchema } from './BandUpdateOneWithoutPointsNestedInput.schema';
import { AlbumUpdateOneWithoutPointsNestedInputObjectSchema } from './AlbumUpdateOneWithoutPointsNestedInput.schema';
import { ArtistUpdateOneWithoutPointsNestedInputObjectSchema } from './ArtistUpdateOneWithoutPointsNestedInput.schema';
import { PullUpdateOneWithoutPointsNestedInputObjectSchema } from './PullUpdateOneWithoutPointsNestedInput.schema';
import { IssueUpdateOneWithoutPointsNestedInputObjectSchema } from './IssueUpdateOneWithoutPointsNestedInput.schema';
import { PointTypeSchema } from '../enums/PointType.schema';
import { EnumPointTypeFieldUpdateOperationsInputObjectSchema } from './EnumPointTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpdateWithoutMusicInput> = z
  .object({
    amount: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    actionType: z
      .union([
        z.lazy(() => PointActionTypeSchema),
        z.lazy(() => EnumPointActionTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutPointsNestedInputObjectSchema)
      .optional(),
    band: z
      .lazy(() => BandUpdateOneWithoutPointsNestedInputObjectSchema)
      .optional(),
    album: z
      .lazy(() => AlbumUpdateOneWithoutPointsNestedInputObjectSchema)
      .optional(),
    artist: z
      .lazy(() => ArtistUpdateOneWithoutPointsNestedInputObjectSchema)
      .optional(),
    pull: z
      .lazy(() => PullUpdateOneWithoutPointsNestedInputObjectSchema)
      .optional(),
    issue: z
      .lazy(() => IssueUpdateOneWithoutPointsNestedInputObjectSchema)
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => PointTypeSchema),
        z.lazy(() => EnumPointTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PointUpdateWithoutMusicInputObjectSchema = Schema;
