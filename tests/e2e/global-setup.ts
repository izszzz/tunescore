import path from "path";

import { chromium } from "@playwright/test";
import type { JWT } from "next-auth/jwt";
import { encode, decode } from "next-auth/jwt";

import { env } from "../../src/env/server.mjs";
import { prisma } from "../../src/server/db/client";

import { token } from "./setup/token";

async function globalSetup() {
  const storagePath = path.resolve(__dirname, "storageState.json");
  const data = new Date();
  const sessionToken = "9468389c-ff19-4eb4-bf73-b56516e9b7e8";
  const encryptedCookieValue = await encode({
    token: token as unknown as JWT,
    secret: env.NEXTAUTH_SECRET,
  });
  console.log(
    await decode({
      token:
        "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..7hQhRa7Jx9kvQ1ys.wvIoEa0b7nbBEa5d0hqBxKEYtON0MhqQpENhu_sIz2CysOjuogxh2dUPaHev9xOyYq2yc8nUBXxpvDx9qZH2C726JlrsxmNPhJJ_UdaYyN6Zuep_m_bG8E7qdBOFj7BlVEVVkiZ5h-9e3BRPApfm3i0-abMoBIZ4fp_YUvm5t4NYQ1aiYuU34o26U0z6rbiR9Yn8CQAZWg-qUXFEYKs5bsQ01MRZvhzKrcah5TOJ5Wa2VfZ5_3NzNO_bNKEe22I3QcLwgi_dG77IrdjLoGPqC1fNVJ8aiQTZ9o6HEpuKBu4za337uWvireXyov_ZVmzK5AshwouDkEWB0LghQ2u_32fntO4dP10qAtZte7f_FxH33rWMylr7qs4bZxweaUbTafNEZ6BzM9vnckFGuBwX3WnAz0rVMDNHCmuSowlR7UMt-1d54jA5IZEPWFei-5UFnNX0kMOMK0UTcDyBD0T0xVIzgwn4oFpwMKJsCwohyIm5kgPg9M_U6RaXmdFZFr-GwKrgZc69QweopQde6t1kI7-jHjl2LmHNPdGzUQnhtwzM4Pf6ZVWpRdO2PK8EKnLy8kCLuXp5NFmf38fMUVbTSDBVsved_nsabuPjW0agzOKMHnYdfrAtETuXELazEKd4ODZNxge_WCrWwJXAkBqLZPCOTWQOAZhjcsM41aclG6D6LJCKYog7u2U_7QgchXGq7nk63GYOiQN5Gaxj8jRIsHyuqu-sdNYzg1L-PCXn.W1CJfzXZZGXi6ngCyXNKgw",
      secret: env.NEXTAUTH_SECRET,
    })
  );
  await prisma.user.upsert({
    where: {
      email: "hakeiprod@gmail.com",
    },
    create: {
      name: "hakei prod",
      email: "hakeiprod@gmail.com",
      sessions: {
        create: {
          expires: new Date(
            data.getFullYear(),
            data.getMonth() + 6,
            data.getDate()
          ),
          sessionToken,
        },
      },
      accounts: {
        create: {
          type: "oauth",
          provider: "google",
          providerAccountId: "123456",
          access_token: "Q3v00dCoWcdzmxpGeiPG2I3wDgsJypSP",
          token_type: "bearer",
          scope: "read:user,user:email",
        },
      },
    },
    update: {},
  });
  const browser = await chromium.launch();
  const browserContext = await browser.newContext();
  await browserContext.addCookies([
    {
      name: "next-auth.session-token",
      value: encryptedCookieValue,
      domain: "localhost",
      path: "/",
      httpOnly: true,
      sameSite: "Lax",
      expires: Math.round((Date.now() + 86400000 * 1) / 1000),
    },
  ]);
  await browserContext.storageState({ path: storagePath });
  await browser.close();
}

export default globalSetup;
