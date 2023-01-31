import { test, expect } from "@playwright/test";

// test.describe.configure({ mode: "serial" });

test.describe("Unauthenticated User", () => {
  test("should not be created music", async ({ page }) => {
    await page.goto("/musics/new");
    await page.getByLabel("copy").click();
    await page.getByLabel("private").click();
    await page.getByLabel("Title *").fill("test");
    await page.getByRole("button", { name: "submit" }).click();
    await expect(page.getByRole("heading", { name: "Sign In" })).toHaveText(
      "Sign In"
    );
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
    await page.getByText("copy").click();
    await page.getByText("private").click();
    await page.getByLabel("Title *").fill("test");
    await page.getByRole("button", { name: "submit" }).click();
    await expect(page).toHaveURL(/.*\//);
  });
});
