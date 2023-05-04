import path from "path";

import { chromium } from "@playwright/test";
import type { JWT } from "next-auth/jwt";
import { encode } from "next-auth/jwt";

import { env } from "../../../src/env/server.mjs";
import { prisma } from "../../../src/server/db/client.js";

import { createToken } from "./token.js";

async function globalSetup() {
  const storagePath = path.resolve(__dirname, "storageState.json");
  const data = new Date();
  const sessionToken = "9468389c-ff19-4eb4-bf73-b56516e9b7e8";
  const encryptedCookieValue = await createToken();
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
      role: "Admin",
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
