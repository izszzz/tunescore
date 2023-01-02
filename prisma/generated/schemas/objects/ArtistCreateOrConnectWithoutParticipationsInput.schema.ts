import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistCreateWithoutParticipationsInputObjectSchema } from './ArtistCreateWithoutParticipationsInput.schema';
import { ArtistUncheckedCreateWithoutParticipationsInputObjectSchema } from './ArtistUncheckedCreateWithoutParticipationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutParticipationsInput> =
  z
    .object({
      where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ArtistCreateWithoutParticipationsInputObjectSchema),
        z.lazy(
          () => ArtistUncheckedCreateWithoutParticipationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistCreateOrConnectWithoutParticipationsInputObjectSchema =
  Schema;
