import { z } from 'zod';
import { ParticipationSelectObjectSchema } from './objects/ParticipationSelect.schema';
import { ParticipationIncludeObjectSchema } from './objects/ParticipationInclude.schema';
import { ParticipationWhereInputObjectSchema } from './objects/ParticipationWhereInput.schema';
import { ParticipationOrderByWithRelationInputObjectSchema } from './objects/ParticipationOrderByWithRelationInput.schema';
import { ParticipationWhereUniqueInputObjectSchema } from './objects/ParticipationWhereUniqueInput.schema';
import { ParticipationScalarFieldEnumSchema } from './enums/ParticipationScalarFieldEnum.schema';

export const ParticipationFindManySchema = z.object({
  select: z.lazy(() => ParticipationSelectObjectSchema.optional()),
  include: z.lazy(() => ParticipationIncludeObjectSchema.optional()),
  where: ParticipationWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ParticipationOrderByWithRelationInputObjectSchema,
      ParticipationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: ParticipationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ParticipationScalarFieldEnumSchema).optional(),
});
