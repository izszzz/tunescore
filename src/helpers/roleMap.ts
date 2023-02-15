import { Prisma } from "@prisma/client";

export const roleMapInclude = Prisma.validator<Prisma.RoleMapInclude>()({
  role: true,
});
