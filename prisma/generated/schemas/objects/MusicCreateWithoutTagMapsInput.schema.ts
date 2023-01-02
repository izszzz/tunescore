import { z } from 'zod';
import { MusicTypeSchema } from '../enums/MusicType.schema';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { UserCreateNestedOneWithoutMusicsInputObjectSchema } from './UserCreateNestedOneWithoutMusicsInput.schema';
import { BandCreateNestedOneWithoutMusicsInputObjectSchema } from './BandCreateNestedOneWithoutMusicsInput.schema';
import { AlbumCreateNestedManyWithoutMusicsInputObjectSchema } from './AlbumCreateNestedManyWithoutMusicsInput.schema';
import { MusicCreatealbumIDsInputObjectSchema } from './MusicCreatealbumIDsInput.schema';
import { ParticipationCreateNestedManyWithoutMusicInputObjectSchema } from './ParticipationCreateNestedManyWithoutMusicInput.schema';
import { IssueCreateNestedManyWithoutMusicInputObjectSchema } from './IssueCreateNestedManyWithoutMusicInput.schema';
import { PullCreateNestedManyWithoutMusicInputObjectSchema } from './PullCreateNestedManyWithoutMusicInput.schema';
import { BookmarkCreateNestedManyWithoutMusicInputObjectSchema } from './BookmarkCreateNestedManyWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateWithoutTagMapsInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => MusicTypeSchema),
    title: z.union([
      z.lazy(() => LocalesCreateEnvelopeInputObjectSchema),
      z.lazy(() => LocalesCreateInputObjectSchema),
    ]),
    score: z.string().optional().nullable(),
    visibility: z.lazy(() => VisibilitySchema),
    price: z.number().optional().nullable(),
    link: z
      .union([
        z.lazy(() => LinkListNullableCreateEnvelopeInputObjectSchema),
        z.lazy(() => LinkListCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
    user: z
      .lazy(() => UserCreateNestedOneWithoutMusicsInputObjectSchema)
      .optional(),
    band: z
      .lazy(() => BandCreateNestedOneWithoutMusicsInputObjectSchema)
      .optional(),
    albums: z
      .lazy(() => AlbumCreateNestedManyWithoutMusicsInputObjectSchema)
      .optional(),
    albumIDs: z
      .union([
        z.lazy(() => MusicCreatealbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    participations: z
      .lazy(() => ParticipationCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    issues: z
      .lazy(() => IssueCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    pulls: z
      .lazy(() => PullCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkCreateNestedManyWithoutMusicInputObjectSchema)
      .optional(),
  })
  .strict();

export const MusicCreateWithoutTagMapsInputObjectSchema = Schema;
