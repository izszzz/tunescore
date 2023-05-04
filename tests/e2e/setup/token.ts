import type { UserRoleType } from "@prisma/client";
import type { JWT } from "next-auth/jwt";
import { encode } from "next-auth/jwt";
import { v4 as uuidv4 } from "uuid";

import { env } from "../../../src/env/server.mjs";

const token = {
  name: "hakei prod",
  email: "hakeiprod@gmail.com",
  picture:
    "https://lh3.googleusercontent.com/a/AGNmyxYIOkNTLwr51sS34gRr3LNBlywwynKhZypxiZ1v=s96-c",
  sub: "54826c8e-24c8-4b2c-9663-31d69b250325",
  user: {
    id: "54826c8e-24c8-4b2c-9663-31d69b250325",
    name: "hakei prod",
    email: "hakeiprod@gmail.com",
    emailVerified: null,
    image:
      "https://lh3.googleusercontent.com/a/AGNmyxYIOkNTLwr51sS34gRr3LNBlywwynKhZypxiZ1v=s96-c",
    stripeCustomerId: null,
    role: "Admin",
    point: 0,
    providers: [],
  },
  iat: 1683095063,
  exp: 1685687063,
  jti: uuidv4(),
};
export const createToken = (role: UserRoleType = "Admin") =>
  encode({
    token: { ...token, role } as unknown as JWT,
    secret: env.NEXTAUTH_SECRET,
  });
