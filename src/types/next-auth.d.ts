import type { UserRoleType } from "@prisma/client";
import type { DefaultSession, DefaultUser } from "next-auth";
import type { DefaultJWT } from "next-auth/jwt";

interface BaseUser {
  id: string;
  stripeCustomerId: string;
  providers: string[];
  role: UserRoleType;
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: BaseUser & DefaultSession["user"];
  }

  interface User extends DefaultUser, BaseUser {}
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    user: BaseUser;
  }
}
