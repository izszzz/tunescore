import { test } from "@playwright/test";

import { prisma } from "../../../../src/server/db/client";
import { getBookmarkButton } from "../../../helpers";

test.describe("Unauthenticated User", () => {
  test("should not be bookmarked", async ({ page }) => {
    const album = await prisma.album.findFirst();
    await page.goto(`/albums/${album?.id}`);
    await (await getBookmarkButton(page)).click();
  });
});
