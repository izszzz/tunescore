import { test } from "@playwright/test";

import { prisma } from "../../../../src/server/db/client";
import { getBookmarkButton } from "../../../helpers";

test.describe("Unauthenticated User", () => {
  test("should not be bookmarked", async ({ page }) => {
    const band = await prisma.band.findFirst();
    await page.goto(`/bands/${band?.id}`);
    await (await getBookmarkButton(page)).click();
  });
});
