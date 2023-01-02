import { z } from 'zod';
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema';
import { ParticipationUpdateWithoutArtistInputObjectSchema } from './ParticipationUpdateWithoutArtistInput.schema';
import { ParticipationUncheckedUpdateWithoutArtistInputObjectSchema } from './ParticipationUncheckedUpdateWithoutArtistInput.schema';
import { ParticipationCreateWithoutArtistInputObjectSchema } from './ParticipationCreateWithoutArtistInput.schema';
import { ParticipationUncheckedCreateWithoutArtistInputObjectSchema } from './ParticipationUncheckedCreateWithoutArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUpsertWithWhereUniqueWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ParticipationUpdateWithoutArtistInputObjectSchema),
        z.lazy(
          () => ParticipationUncheckedUpdateWithoutArtistInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ParticipationCreateWithoutArtistInputObjectSchema),
        z.lazy(
          () => ParticipationUncheckedCreateWithoutArtistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ParticipationUpsertWithWhereUniqueWithoutArtistInputObjectSchema =
  Schema;
