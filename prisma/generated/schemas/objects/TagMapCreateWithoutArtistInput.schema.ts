import { z } from 'zod';
import { TagCreateNestedOneWithoutTagMapInputObjectSchema } from './TagCreateNestedOneWithoutTagMapInput.schema';
import { MusicCreateNestedOneWithoutTagMapsInputObjectSchema } from './MusicCreateNestedOneWithoutTagMapsInput.schema';
import { BandCreateNestedOneWithoutTagMapsInputObjectSchema } from './BandCreateNestedOneWithoutTagMapsInput.schema';
import { AlbumCreateNestedOneWithoutTagMapsInputObjectSchema } from './AlbumCreateNestedOneWithoutTagMapsInput.schema';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateWithoutArtistInput> = z
  .object({
    id: z.string().optional(),
    tag: z.lazy(() => TagCreateNestedOneWithoutTagMapInputObjectSchema),
    music: z
      .lazy(() => MusicCreateNestedOneWithoutTagMapsInputObjectSchema)
      .optional(),
    band: z
      .lazy(() => BandCreateNestedOneWithoutTagMapsInputObjectSchema)
      .optional(),
    album: z
      .lazy(() => AlbumCreateNestedOneWithoutTagMapsInputObjectSchema)
      .optional(),
    resourceType: z.lazy(() => ResourceTypeSchema),
  })
  .strict();

export const TagMapCreateWithoutArtistInputObjectSchema = Schema;
