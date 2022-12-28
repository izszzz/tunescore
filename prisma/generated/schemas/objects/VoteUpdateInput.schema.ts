import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { PullUpdateOneRequiredWithoutVoteNestedInputObjectSchema } from './PullUpdateOneRequiredWithoutVoteNestedInput.schema';
import { UserUpdateManyWithoutVoteNestedInputObjectSchema } from './UserUpdateManyWithoutVoteNestedInput.schema';
import { VoteUpdateuserIDsInputObjectSchema } from './VoteUpdateuserIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteUpdateInput> = z
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
    pull: z
      .lazy(() => PullUpdateOneRequiredWithoutVoteNestedInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserUpdateManyWithoutVoteNestedInputObjectSchema)
      .optional(),
    userIDs: z
      .union([
        z.lazy(() => VoteUpdateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const VoteUpdateInputObjectSchema = Schema;