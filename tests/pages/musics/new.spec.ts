import { test, expect } from "@playwright/test";

import { getAuthDialog } from "../../helpers";

test.describe("Unauthenticated User", () => {
  test("should not be created music", async ({ page }) => {
    await page.goto("/musics/new");
    await page.getByLabel("copy").click();
    await page.getByLabel("private").click();
    await page.getByLabel("Title *").type("test");
    await page.getByRole("button", { name: "投稿" }).click();
    await expect(await getAuthDialog(page)).toHaveText("Sign In");
  });
});

test.describe("Authenticated User", () => {
  test("should be created music", async ({ page, context }) => {
    await context.addCookies([
      {
        name: "next-auth.session-token",
        value: "04456e41-ec3b-4edf-92c1-48c14e57cacd2",
        domain: "localhost",
        path: "/",
        httpOnly: true,
        sameSite: "Lax",
        expires: 1661406204,
      },
    ]);

    await page.goto("/musics/new");
    await page.getByLabel("copy").click();
    await page.getByLabel("private").click();
    await page.getByLabel("Title *").type("test");
    await page.getByRole("button", { name: "投稿" }).click();
    await page.screenshot({
      path: `./images/${page.context().browser()?.browserType().name()}.png`,
    });
    await expect(page).toHaveURL(/.*\//);
  });
});
