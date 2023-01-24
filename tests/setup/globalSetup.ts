import path from "node:path";

import { chromium } from "@playwright/test";

import { prisma } from "../../src/server/db/client";

async function globalSetup() {
  const storagePath = path.resolve(__dirname, "storageState.json");
  const date = new Date();
  const sessionToken = "04456e41-ec3b-4edf-92c1-48c14e57cacd2";
  await prisma.user.upsert({
    where: {
      email: "hakeiprod@gmail.com",
    },
    create: {
      name: "hakei prod",
      email: "hakeiprod@gmail.com",
      sessions: {
        create: {
          expires: new Date(date.getFullYear(), date.getMonth() + 1, 0),
          sessionToken,
        },
      },
      accounts: {
        create: {
          type: "oauth",
          provider: "google",
          providerAccountId: "109395522517058749793",
          access_token:
            "ya29.a0AVvZVsoMWeJPgJxdFUowRgaID8_Espgz07CEbvNyi31ixoAwAK-L_Wis0P74xw6En5KLp85cWgoGrQk8Vaxb-rELok3NdVUZlKap0cr6T5XpFjDIT055Fe8spqbsaANrbnrS4dcMr_NeXBKC8gbipVP6DTJUaCgYKAfQSARISFQGbdwaIS3ZNz7EQy0cdoXNkhB-9mA0163",
          token_type: "Bearer",
          scope: "",
        },
      },
    },
    update: {},
  });

  const browser = await chromium.launch();
  const context = await browser.newContext({ storageState: storagePath });
  await context.addCookies([
    {
      name: "next-auth.session-token",
      value: sessionToken,
      domain: "localhost",
      path: "/",
      httpOnly: true,
      sameSite: "Lax",
      expires: 1661406204,
    },
  ]);
  await context.storageState({ path: storagePath });
  await browser.close();
}

export default globalSetup;
