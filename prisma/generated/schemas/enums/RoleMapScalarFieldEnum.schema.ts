import { z } from 'zod';

export const RoleMapScalarFieldEnumSchema = z.enum([
  'id',
  'roleId',
  'participationId',
]);
