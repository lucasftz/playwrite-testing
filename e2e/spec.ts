import { test, expect } from "@playwright/test";

test("redirect to login", async ({ page }) => {
  await page.goto(process.env.WEBSITE_URL);
  await expect(page.getByText("Login page")).toBeVisible();
});
