import { z } from 'zod';
import { ArtistCreateWithoutComposedMusicsInputObjectSchema } from './ArtistCreateWithoutComposedMusicsInput.schema';
import { ArtistUncheckedCreateWithoutComposedMusicsInputObjectSchema } from './ArtistUncheckedCreateWithoutComposedMusicsInput.schema';
import { ArtistCreateOrConnectWithoutComposedMusicsInputObjectSchema } from './ArtistCreateOrConnectWithoutComposedMusicsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateNestedManyWithoutComposedMusicsInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => ArtistCreateWithoutComposedMusicsInputObjectSchema),
            z
              .lazy(() => ArtistCreateWithoutComposedMusicsInputObjectSchema)
              .array(),
            z.lazy(
              () => ArtistUncheckedCreateWithoutComposedMusicsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  ArtistUncheckedCreateWithoutComposedMusicsInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(
              () => ArtistCreateOrConnectWithoutComposedMusicsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  ArtistCreateOrConnectWithoutComposedMusicsInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => ArtistWhereUniqueInputObjectSchema),
            z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const ArtistCreateNestedManyWithoutComposedMusicsInputObjectSchema =
  Schema;
