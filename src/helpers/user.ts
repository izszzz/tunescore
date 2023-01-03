import type { useSession } from "next-auth/react";

export type GetCurrentUserArg = ReturnType<typeof useSession>;
export const getCurrentUser = (session: GetCurrentUserArg) =>
  session.data?.user;
export const getCurrentUserId = (session: GetCurrentUserArg) =>
  getCurrentUser(session)?.id;
