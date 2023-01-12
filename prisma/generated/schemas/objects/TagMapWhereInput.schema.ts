import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { TagRelationFilterObjectSchema } from './TagRelationFilter.schema';
import { TagWhereInputObjectSchema } from './TagWhereInput.schema';
import { MusicRelationFilterObjectSchema } from './MusicRelationFilter.schema';
import { MusicWhereInputObjectSchema } from './MusicWhereInput.schema';
import { BandRelationFilterObjectSchema } from './BandRelationFilter.schema';
import { BandWhereInputObjectSchema } from './BandWhereInput.schema';
import { AlbumRelationFilterObjectSchema } from './AlbumRelationFilter.schema';
import { AlbumWhereInputObjectSchema } from './AlbumWhereInput.schema';
import { ArtistRelationFilterObjectSchema } from './ArtistRelationFilter.schema';
import { ArtistWhereInputObjectSchema } from './ArtistWhereInput.schema';
import { EnumResourceTypeFilterObjectSchema } from './EnumResourceTypeFilter.schema';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TagMapWhereInputObjectSchema),
        z.lazy(() => TagMapWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TagMapWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TagMapWhereInputObjectSchema),
        z.lazy(() => TagMapWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    tag: z
      .union([
        z.lazy(() => TagRelationFilterObjectSchema),
        z.lazy(() => TagWhereInputObjectSchema),
      ])
      .optional(),
    tagId: z
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
    resourceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => EnumResourceTypeFilterObjectSchema),
        z.lazy(() => ResourceTypeSchema),
      ])
      .optional(),
  })
  .strict();

export const TagMapWhereInputObjectSchema = Schema;
