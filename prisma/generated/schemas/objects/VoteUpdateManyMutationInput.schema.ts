import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { VoteUpdateuserIDsInputObjectSchema } from './VoteUpdateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteUpdateManyMutationInput> = z
  .object({
    start: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    end: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    good: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    bad: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => VoteUpdateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const VoteUpdateManyMutationInputObjectSchema = Schema;