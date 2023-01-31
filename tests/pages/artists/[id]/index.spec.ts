import { test } from "@playwright/test";

import { prisma } from "../../../../src/server/db/client";
import { getBookmarkButton } from "../../../helpers";

test.describe("Unauthenticated User", () => {
  test("should not be bookmarked", async ({ page }) => {
    const artist = await prisma.artist.findFirst();
    await page.goto(`/artists/${artist?.id}`);
    await (await getBookmarkButton(page)).click();
  });
});
