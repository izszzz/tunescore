import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IssueStatusSchema } from '../enums/IssueStatus.schema';
import { EnumIssueStatusFieldUpdateOperationsInputObjectSchema } from './EnumIssueStatusFieldUpdateOperationsInput.schema';
import { MusicUpdateOneRequiredWithoutIssuesNestedInputObjectSchema } from './MusicUpdateOneRequiredWithoutIssuesNestedInput.schema';
import { UserUpdateOneRequiredWithoutIssuesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutIssuesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUpdateWithoutCommentsInput> = z
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
    status: z
      .union([
        z.lazy(() => IssueStatusSchema),
        z.lazy(() => EnumIssueStatusFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    music: z
      .lazy(() => MusicUpdateOneRequiredWithoutIssuesNestedInputObjectSchema)
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutIssuesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const IssueUpdateWithoutCommentsInputObjectSchema = Schema;
