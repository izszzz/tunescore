import { z } from 'zod';
import { ArtistCreateWithoutParticipationsInputObjectSchema } from './ArtistCreateWithoutParticipationsInput.schema';
import { ArtistUncheckedCreateWithoutParticipationsInputObjectSchema } from './ArtistUncheckedCreateWithoutParticipationsInput.schema';
import { ArtistCreateOrConnectWithoutParticipationsInputObjectSchema } from './ArtistCreateOrConnectWithoutParticipationsInput.schema';
import { ArtistUpsertWithoutParticipationsInputObjectSchema } from './ArtistUpsertWithoutParticipationsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutParticipationsInputObjectSchema } from './ArtistUpdateWithoutParticipationsInput.schema';
import { ArtistUncheckedUpdateWithoutParticipationsInputObjectSchema } from './ArtistUncheckedUpdateWithoutParticipationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateOneRequiredWithoutParticipationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArtistCreateWithoutParticipationsInputObjectSchema),
          z.lazy(
            () => ArtistUncheckedCreateWithoutParticipationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ArtistCreateOrConnectWithoutParticipationsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ArtistUpsertWithoutParticipationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ArtistUpdateWithoutParticipationsInputObjectSchema),
          z.lazy(
            () => ArtistUncheckedUpdateWithoutParticipationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ArtistUpdateOneRequiredWithoutParticipationsNestedInputObjectSchema =
  Schema;
