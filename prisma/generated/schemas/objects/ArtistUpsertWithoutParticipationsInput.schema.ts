import { z } from 'zod';
import { ArtistUpdateWithoutParticipationsInputObjectSchema } from './ArtistUpdateWithoutParticipationsInput.schema';
import { ArtistUncheckedUpdateWithoutParticipationsInputObjectSchema } from './ArtistUncheckedUpdateWithoutParticipationsInput.schema';
import { ArtistCreateWithoutParticipationsInputObjectSchema } from './ArtistCreateWithoutParticipationsInput.schema';
import { ArtistUncheckedCreateWithoutParticipationsInputObjectSchema } from './ArtistUncheckedCreateWithoutParticipationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpsertWithoutParticipationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArtistUpdateWithoutParticipationsInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateWithoutParticipationsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutParticipationsInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutParticipationsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistUpsertWithoutParticipationsInputObjectSchema = Schema;
