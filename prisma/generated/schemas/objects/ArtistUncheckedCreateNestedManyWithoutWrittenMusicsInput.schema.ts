import { z } from 'zod';
import { ArtistCreateWithoutWrittenMusicsInputObjectSchema } from './ArtistCreateWithoutWrittenMusicsInput.schema';
import { ArtistUncheckedCreateWithoutWrittenMusicsInputObjectSchema } from './ArtistUncheckedCreateWithoutWrittenMusicsInput.schema';
import { ArtistCreateOrConnectWithoutWrittenMusicsInputObjectSchema } from './ArtistCreateOrConnectWithoutWrittenMusicsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUncheckedCreateNestedManyWithoutWrittenMusicsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArtistCreateWithoutWrittenMusicsInputObjectSchema),
          z
            .lazy(() => ArtistCreateWithoutWrittenMusicsInputObjectSchema)
            .array(),
          z.lazy(
            () => ArtistUncheckedCreateWithoutWrittenMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () => ArtistUncheckedCreateWithoutWrittenMusicsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ArtistCreateOrConnectWithoutWrittenMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () => ArtistCreateOrConnectWithoutWrittenMusicsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ArtistWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ArtistUncheckedCreateNestedManyWithoutWrittenMusicsInputObjectSchema =
  Schema;
