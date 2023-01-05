import { z } from 'zod';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkListNullableCreateEnvelopeInputObjectSchema } from './LinkListNullableCreateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { AlbumCreatemusicIDsInputObjectSchema } from './AlbumCreatemusicIDsInput.schema';
import { AlbumCreateartistIDsInputObjectSchema } from './AlbumCreateartistIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateManyInput> = z
  .object({
    id: z.string().optional(),
    title: z.union([
      z.lazy(() => LocalesCreateEnvelopeInputObjectSchema),
      z.lazy(() => LocalesCreateInputObjectSchema),
    ]),
    link: z
      .union([
        z.lazy(() => LinkListNullableCreateEnvelopeInputObjectSchema),
        z.lazy(() => LinkListCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
    bandId: z.string().optional().nullable(),
    musicIDs: z
      .union([
        z.lazy(() => AlbumCreatemusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => AlbumCreateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const AlbumCreateManyInputObjectSchema = Schema;
