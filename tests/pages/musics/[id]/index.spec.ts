import { test } from "@playwright/test";

import { prisma } from "../../../../src/server/db/client";
import { getBookmarkButton } from "../../../helpers";

test.describe("Unauthenticated User", () => {
  test("should not be bookmarked", async ({ page }) => {
    const music = await prisma.music.findFirst();
    await page.goto(`/musics/${music?.id}`);
    await (await getBookmarkButton(page)).click();
  });
});
