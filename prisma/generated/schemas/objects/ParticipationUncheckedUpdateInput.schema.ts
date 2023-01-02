import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleMapUncheckedUpdateManyWithoutParticipationNestedInputObjectSchema } from './RoleMapUncheckedUpdateManyWithoutParticipationNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUncheckedUpdateInput> = z
  .object({
    artistId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    musicId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    roleMap: z
      .lazy(
        () =>
          RoleMapUncheckedUpdateManyWithoutParticipationNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ParticipationUncheckedUpdateInputObjectSchema = Schema;
