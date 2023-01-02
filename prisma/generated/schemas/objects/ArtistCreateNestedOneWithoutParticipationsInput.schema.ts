import { z } from 'zod';
import { ArtistCreateWithoutParticipationsInputObjectSchema } from './ArtistCreateWithoutParticipationsInput.schema';
import { ArtistUncheckedCreateWithoutParticipationsInputObjectSchema } from './ArtistUncheckedCreateWithoutParticipationsInput.schema';
import { ArtistCreateOrConnectWithoutParticipationsInputObjectSchema } from './ArtistCreateOrConnectWithoutParticipationsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateNestedOneWithoutParticipationsInput> =
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
      connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ArtistCreateNestedOneWithoutParticipationsInputObjectSchema =
  Schema;
