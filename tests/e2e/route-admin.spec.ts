import type { Page } from "@playwright/test";
import { expect, test } from "@playwright/test";

import type { Path } from "./helpers";
import { pageGoto } from "./helpers";

const testShouldBeAccess = (path: Path) =>
    test(path, ({ page }) => shouldBeAccess(page, path)),
  shouldBeAccess = async (page: Page, path: Path) => {
    await pageGoto(page, path);
    await expect(page.getByText("tunescore")).toBeVisible();
  },
  testShouldBeRedirectToSign = (path: Path) =>
    test(path, ({ page }) => shouldBeRedirectToSignPage(page, path)),
  shouldBeRedirectToSignPage = async (page: Page, path: Path) => {
    await pageGoto(page, path);
    await expect(page).toHaveURL(/.*sign/);
  };

test.describe("auth", () => {
  testShouldBeAccess("/");
  testShouldBeAccess("/new");
  testShouldBeAccess("/users");
  testShouldBeAccess("/search");

  testShouldBeAccess("/dashboard");
  testShouldBeAccess("/cart");
  testShouldBeAccess("/thanks");
  testShouldBeAccess("/pay");
  testShouldBeAccess("/admin");
});

test.describe("unauth", () => {
  test.beforeEach(({ context }) => context.clearCookies());
  testShouldBeAccess("/");
  testShouldBeAccess("/new");
  testShouldBeAccess("/users");
  testShouldBeAccess("/search");

  testShouldBeRedirectToSign("/dashboard");
  testShouldBeRedirectToSign("/cart");
  testShouldBeRedirectToSign("/thanks");
  testShouldBeRedirectToSign("/pay");
  testShouldBeRedirectToSign("/admin");
});
