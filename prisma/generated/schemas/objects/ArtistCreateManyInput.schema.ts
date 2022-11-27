import { z } from 'zod';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkNullableCreateEnvelopeInputObjectSchema } from './LinkNullableCreateEnvelopeInput.schema';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';
import { ArtistCreatewrittenMusicsIDsInputObjectSchema } from './ArtistCreatewrittenMusicsIDsInput.schema';
import { ArtistCreatecomposedMusicsIDsInputObjectSchema } from './ArtistCreatecomposedMusicsIDsInput.schema';
import { ArtistCreatemusicIDsInputObjectSchema } from './ArtistCreatemusicIDsInput.schema';
import { ArtistCreatebandIDsInputObjectSchema } from './ArtistCreatebandIDsInput.schema';
import { ArtistCreateuserIDsInputObjectSchema } from './ArtistCreateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.union([
      z.lazy(() => LocalesCreateEnvelopeInputObjectSchema),
      z.lazy(() => LocalesCreateInputObjectSchema),
    ]),
    link: z
      .union([
        z.lazy(() => LinkNullableCreateEnvelopeInputObjectSchema),
        z.lazy(() => LinkCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
    writtenMusicsIDs: z
      .union([
        z.lazy(() => ArtistCreatewrittenMusicsIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    composedMusicsIDs: z
      .union([
        z.lazy(() => ArtistCreatecomposedMusicsIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    musicIDs: z
      .union([
        z.lazy(() => ArtistCreatemusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    bandIDs: z
      .union([
        z.lazy(() => ArtistCreatebandIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => ArtistCreateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const ArtistCreateManyInputObjectSchema = Schema;
