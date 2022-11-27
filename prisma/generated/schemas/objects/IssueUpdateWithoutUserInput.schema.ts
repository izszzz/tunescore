import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MusicUpdateOneRequiredWithoutIssuesNestedInputObjectSchema } from './MusicUpdateOneRequiredWithoutIssuesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUpdateWithoutUserInput> = z
  .object({
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    body: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    music: z
      .lazy(() => MusicUpdateOneRequiredWithoutIssuesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const IssueUpdateWithoutUserInputObjectSchema = Schema;
