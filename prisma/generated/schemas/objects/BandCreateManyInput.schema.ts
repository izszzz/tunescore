import { z } from 'zod';
import { LocalesCreateEnvelopeInputObjectSchema } from './LocalesCreateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkNullableCreateEnvelopeInputObjectSchema } from './LinkNullableCreateEnvelopeInput.schema';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';
import { BandCreateartistIDsInputObjectSchema } from './BandCreateartistIDsInput.schema';
import { BandCreateuserIDsInputObjectSchema } from './BandCreateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCreateManyInput> = z
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
    artistIDs: z
      .union([
        z.lazy(() => BandCreateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => BandCreateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const BandCreateManyInputObjectSchema = Schema;
