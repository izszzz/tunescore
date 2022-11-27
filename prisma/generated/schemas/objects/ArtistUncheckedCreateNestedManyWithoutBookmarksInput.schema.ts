import { z } from 'zod';
import { ArtistCreateWithoutBookmarksInputObjectSchema } from './ArtistCreateWithoutBookmarksInput.schema';
import { ArtistUncheckedCreateWithoutBookmarksInputObjectSchema } from './ArtistUncheckedCreateWithoutBookmarksInput.schema';
import { ArtistCreateOrConnectWithoutBookmarksInputObjectSchema } from './ArtistCreateOrConnectWithoutBookmarksInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUncheckedCreateNestedManyWithoutBookmarksInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => ArtistCreateWithoutBookmarksInputObjectSchema),
            z.lazy(() => ArtistCreateWithoutBookmarksInputObjectSchema).array(),
            z.lazy(
              () => ArtistUncheckedCreateWithoutBookmarksInputObjectSchema,
            ),
            z
              .lazy(
                () => ArtistUncheckedCreateWithoutBookmarksInputObjectSchema,
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
              () => ArtistCreateOrConnectWithoutBookmarksInputObjectSchema,
            ),
            z
              .lazy(
                () => ArtistCreateOrConnectWithoutBookmarksInputObjectSchema,
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

export const ArtistUncheckedCreateNestedManyWithoutBookmarksInputObjectSchema =
  Schema;
