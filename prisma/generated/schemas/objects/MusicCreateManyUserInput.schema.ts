import { z } from 'zod';
import { MusicTypeSchema } from '../enums/MusicType.schema';
import { LocaleCreateEnvelopeInputObjectSchema } from './LocaleCreateEnvelopeInput.schema';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { MusicCreatealbumIDsInputObjectSchema } from './MusicCreatealbumIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => MusicTypeSchema),
    title: z.union([
      z.lazy(() => LocaleCreateEnvelopeInputObjectSchema),
      z.lazy(() => LocaleCreateInputObjectSchema),
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
    bandId: z.string().optional().nullable(),
    albumIDs: z
      .union([
        z.lazy(() => MusicCreatealbumIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const MusicCreateManyUserInputObjectSchema = Schema;
