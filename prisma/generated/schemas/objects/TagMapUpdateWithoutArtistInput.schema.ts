import { z } from 'zod';
import { TagUpdateOneRequiredWithoutTagMapNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutTagMapNestedInput.schema';
import { MusicUpdateOneWithoutTagMapsNestedInputObjectSchema } from './MusicUpdateOneWithoutTagMapsNestedInput.schema';
import { BandUpdateOneWithoutTagMapsNestedInputObjectSchema } from './BandUpdateOneWithoutTagMapsNestedInput.schema';
import { AlbumUpdateOneWithoutTagMapsNestedInputObjectSchema } from './AlbumUpdateOneWithoutTagMapsNestedInput.schema';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';
import { EnumResourceTypeFieldUpdateOperationsInputObjectSchema } from './EnumResourceTypeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUpdateWithoutArtistInput> = z
  .object({
    tag: z
      .lazy(() => TagUpdateOneRequiredWithoutTagMapNestedInputObjectSchema)
      .optional(),
    music: z
      .lazy(() => MusicUpdateOneWithoutTagMapsNestedInputObjectSchema)
      .optional(),
    band: z
      .lazy(() => BandUpdateOneWithoutTagMapsNestedInputObjectSchema)
      .optional(),
    album: z
      .lazy(() => AlbumUpdateOneWithoutTagMapsNestedInputObjectSchema)
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => ResourceTypeSchema),
        z.lazy(() => EnumResourceTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TagMapUpdateWithoutArtistInputObjectSchema = Schema;
