import { z } from 'zod';
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema';
import { ParticipationUpdateWithoutArtistInputObjectSchema } from './ParticipationUpdateWithoutArtistInput.schema';
import { ParticipationUncheckedUpdateWithoutArtistInputObjectSchema } from './ParticipationUncheckedUpdateWithoutArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUpdateWithWhereUniqueWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ParticipationUpdateWithoutArtistInputObjectSchema),
        z.lazy(
          () => ParticipationUncheckedUpdateWithoutArtistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ParticipationUpdateWithWhereUniqueWithoutArtistInputObjectSchema =
  Schema;
