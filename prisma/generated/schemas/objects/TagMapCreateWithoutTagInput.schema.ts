import { z } from 'zod';
import { MusicCreateNestedOneWithoutTagMapsInputObjectSchema } from './MusicCreateNestedOneWithoutTagMapsInput.schema';
import { BandCreateNestedOneWithoutTagMapsInputObjectSchema } from './BandCreateNestedOneWithoutTagMapsInput.schema';
import { AlbumCreateNestedOneWithoutTagMapsInputObjectSchema } from './AlbumCreateNestedOneWithoutTagMapsInput.schema';
import { ArtistCreateNestedOneWithoutTagMapsInputObjectSchema } from './ArtistCreateNestedOneWithoutTagMapsInput.schema';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateWithoutTagInput> = z
  .object({
    id: z.string().optional(),
    music: z
      .lazy(() => MusicCreateNestedOneWithoutTagMapsInputObjectSchema)
      .optional(),
    band: z
      .lazy(() => BandCreateNestedOneWithoutTagMapsInputObjectSchema)
      .optional(),
    album: z
      .lazy(() => AlbumCreateNestedOneWithoutTagMapsInputObjectSchema)
      .optional(),
    artist: z
      .lazy(() => ArtistCreateNestedOneWithoutTagMapsInputObjectSchema)
      .optional(),
    resourceType: z.lazy(() => ResourceTypeSchema),
  })
  .strict();

export const TagMapCreateWithoutTagInputObjectSchema = Schema;
