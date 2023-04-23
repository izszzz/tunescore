import type { UserRoleType } from "@prisma/client";
import type { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
      stripeCustomerId: string;
      providers: string[];
      role: UserRoleType;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    stripeCustomerId: string;
    providers: string[];
    role: UserRoleType;
  }
}
