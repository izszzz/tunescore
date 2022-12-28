import { z } from 'zod';
import { MusicUpdateOneWithoutTagMapsNestedInputObjectSchema } from './MusicUpdateOneWithoutTagMapsNestedInput.schema';
import { BandUpdateOneWithoutTagMapsNestedInputObjectSchema } from './BandUpdateOneWithoutTagMapsNestedInput.schema';
import { AlbumUpdateOneWithoutTagMapsNestedInputObjectSchema } from './AlbumUpdateOneWithoutTagMapsNestedInput.schema';
import { ArtistUpdateOneWithoutTagMapsNestedInputObjectSchema } from './ArtistUpdateOneWithoutTagMapsNestedInput.schema';
import { TagTypeSchema } from '../enums/TagType.schema';
import { EnumTagTypeFieldUpdateOperationsInputObjectSchema } from './EnumTagTypeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUpdateWithoutTagInput> = z
  .object({
    music: z
      .lazy(() => MusicUpdateOneWithoutTagMapsNestedInputObjectSchema)
      .optional(),
    band: z
      .lazy(() => BandUpdateOneWithoutTagMapsNestedInputObjectSchema)
      .optional(),
    album: z
      .lazy(() => AlbumUpdateOneWithoutTagMapsNestedInputObjectSchema)
      .optional(),
    artist: z
      .lazy(() => ArtistUpdateOneWithoutTagMapsNestedInputObjectSchema)
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => TagTypeSchema),
        z.lazy(() => EnumTagTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TagMapUpdateWithoutTagInputObjectSchema = Schema;
