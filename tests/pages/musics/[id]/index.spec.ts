import { test, expect } from "@playwright/test";

import { prisma } from "../../../../src/server/db/client";

test.describe.configure({ mode: "serial" });

test.describe("has music title", () => {
  test("en", async ({ page }) => {
    const data = await prisma.music.findFirst();
    if (!data) return;
    await page.goto(`/en/musics/${data.id}`);
    await page.getByRole("heading", { name: "music" }).click();
    if (!data.title.en) return;
    await expect(page.getByRole("heading", { name: "music" })).toHaveText(
      data.title.en
    );
  });
});

test("unauthorize user cannot bookmark", async ({ page }) => {
  page.context().clearCookies();
  const data = await prisma.music.findFirst();
  if (!data) return;
  await page.goto(`/musics/${data.id}`);
  await page.getByRole("button", { name: "Bookmark" }).click();
  await expect(page.getByRole("heading", { name: "Sign In" })).toHaveText(
    "Sign In"
  );
});
