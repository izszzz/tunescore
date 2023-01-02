import { z } from 'zod';
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema';
import { ParticipationCreateWithoutArtistInputObjectSchema } from './ParticipationCreateWithoutArtistInput.schema';
import { ParticipationUncheckedCreateWithoutArtistInputObjectSchema } from './ParticipationUncheckedCreateWithoutArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationCreateOrConnectWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ParticipationCreateWithoutArtistInputObjectSchema),
        z.lazy(
          () => ParticipationUncheckedCreateWithoutArtistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ParticipationCreateOrConnectWithoutArtistInputObjectSchema =
  Schema;
