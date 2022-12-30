import { useSession } from "next-auth/react";

export type GetAuthenticateUserArg = ReturnType<typeof useSession>;
export const getAuthenticateUser = (session: ReturnType<typeof useSession>) =>
  session.data?.user;
export const getAuthenticateUserId = (session: ReturnType<typeof useSession>) =>
  getAuthenticateUser(session)?.id;
