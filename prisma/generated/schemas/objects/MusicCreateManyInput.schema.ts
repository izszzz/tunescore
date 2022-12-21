import { z } from 'zod';
import { TypeSchema } from '../enums/Type.schema';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { MusicCreatealbumIDsInputObjectSchema } from './MusicCreatealbumIDsInput.schema';
import { MusicCreatecomposerIDsInputObjectSchema } from './MusicCreatecomposerIDsInput.schema';
import { MusicCreatelyristIDsInputObjectSchema } from './MusicCreatelyristIDsInput.schema';
import { MusicCreateartistIDsInputObjectSchema } from './MusicCreateartistIDsInput.schema';
import { MusicCreateuserIDsInputObjectSchema } from './MusicCreateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateManyInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => TypeSchema),
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
    userId: z.string().optional().nullable(),
    bandId: z.string().optional().nullable(),
    albumIDs: z
      .union([
        z.lazy(() => MusicCreatealbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    composerIDs: z
      .union([
        z.lazy(() => MusicCreatecomposerIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    lyristIDs: z
      .union([
        z.lazy(() => MusicCreatelyristIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => MusicCreateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => MusicCreateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const MusicCreateManyInputObjectSchema = Schema;
