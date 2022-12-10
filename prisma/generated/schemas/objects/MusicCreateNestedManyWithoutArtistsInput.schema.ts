import { z } from 'zod';
import { MusicCreateWithoutArtistsInputObjectSchema } from './MusicCreateWithoutArtistsInput.schema';
import { MusicUncheckedCreateWithoutArtistsInputObjectSchema } from './MusicUncheckedCreateWithoutArtistsInput.schema';
import { MusicCreateOrConnectWithoutArtistsInputObjectSchema } from './MusicCreateOrConnectWithoutArtistsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateNestedManyWithoutArtistsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MusicCreateWithoutArtistsInputObjectSchema),
        z.lazy(() => MusicCreateWithoutArtistsInputObjectSchema).array(),
        z.lazy(() => MusicUncheckedCreateWithoutArtistsInputObjectSchema),
        z
          .lazy(() => MusicUncheckedCreateWithoutArtistsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MusicCreateOrConnectWithoutArtistsInputObjectSchema),
        z
          .lazy(() => MusicCreateOrConnectWithoutArtistsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => MusicWhereUniqueInputObjectSchema),
        z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MusicCreateNestedManyWithoutArtistsInputObjectSchema = Schema;
