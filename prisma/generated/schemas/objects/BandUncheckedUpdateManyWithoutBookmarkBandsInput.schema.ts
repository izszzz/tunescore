import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkNullableUpdateEnvelopeInputObjectSchema } from './LinkNullableUpdateEnvelopeInput.schema';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';
import { BandUpdateartistIDsInputObjectSchema } from './BandUpdateartistIDsInput.schema';
import { BandUpdateuserIDsInputObjectSchema } from './BandUpdateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUncheckedUpdateManyWithoutBookmarkBandsInput> =
  z
    .object({
      name: z
        .union([
          z.lazy(() => LocalesUpdateEnvelopeInputObjectSchema),
          z.lazy(() => LocalesCreateInputObjectSchema),
        ])
        .optional(),
      link: z
        .union([
          z.lazy(() => LinkNullableUpdateEnvelopeInputObjectSchema),
          z.lazy(() => LinkCreateInputObjectSchema),
        ])
        .optional()
        .nullable(),
      artistIDs: z
        .union([
          z.lazy(() => BandUpdateartistIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      userIDs: z
        .union([
          z.lazy(() => BandUpdateuserIDsInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
    })
    .strict();

export const BandUncheckedUpdateManyWithoutBookmarkBandsInputObjectSchema =
  Schema;
