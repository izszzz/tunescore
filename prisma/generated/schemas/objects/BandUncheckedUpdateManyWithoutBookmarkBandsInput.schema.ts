import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LinkListNullableUpdateEnvelopeInputObjectSchema } from './LinkListNullableUpdateEnvelopeInput.schema';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
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
          z.lazy(() => LinkListNullableUpdateEnvelopeInputObjectSchema),
          z.lazy(() => LinkListCreateInputObjectSchema),
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
