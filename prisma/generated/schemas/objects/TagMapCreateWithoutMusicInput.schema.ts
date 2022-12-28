import { z } from 'zod';
import { TagCreateNestedOneWithoutTagMapInputObjectSchema } from './TagCreateNestedOneWithoutTagMapInput.schema';
import { BandCreateNestedOneWithoutTagMapsInputObjectSchema } from './BandCreateNestedOneWithoutTagMapsInput.schema';
import { AlbumCreateNestedOneWithoutTagMapsInputObjectSchema } from './AlbumCreateNestedOneWithoutTagMapsInput.schema';
import { ArtistCreateNestedOneWithoutTagMapsInputObjectSchema } from './ArtistCreateNestedOneWithoutTagMapsInput.schema';
import { TagTypeSchema } from '../enums/TagType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateWithoutMusicInput> = z
  .object({
    id: z.string().optional(),
    tag: z.lazy(() => TagCreateNestedOneWithoutTagMapInputObjectSchema),
    band: z
      .lazy(() => BandCreateNestedOneWithoutTagMapsInputObjectSchema)
      .optional(),
    album: z
      .lazy(() => AlbumCreateNestedOneWithoutTagMapsInputObjectSchema)
      .optional(),
    artist: z
      .lazy(() => ArtistCreateNestedOneWithoutTagMapsInputObjectSchema)
      .optional(),
    resourceType: z.lazy(() => TagTypeSchema),
  })
  .strict();

export const TagMapCreateWithoutMusicInputObjectSchema = Schema;
