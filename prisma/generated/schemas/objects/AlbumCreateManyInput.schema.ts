import { z } from 'zod';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { AlbumCreatemusicIDsInputObjectSchema } from './AlbumCreatemusicIDsInput.schema';
import { AlbumCreateartistIDsInputObjectSchema } from './AlbumCreateartistIDsInput.schema';
import { AlbumCreateuserIDsInputObjectSchema } from './AlbumCreateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateManyInput> = z
  .object({
    id: z.string().optional(),
    title: z.union([
      z.lazy(() => LocalesCreateEnvelopeInputObjectSchema),
      z.lazy(() => LocalesCreateInputObjectSchema),
    ]),
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
    userIDs: z
      .union([
        z.lazy(() => AlbumCreateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const AlbumCreateManyInputObjectSchema = Schema;