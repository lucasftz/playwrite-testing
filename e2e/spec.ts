import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {
  await page.goto(process.env.WEBSITE_URL);
  await expect(page.getByText("Login page")).toBeVisible();
  await page.getByPlaceholder("username").fill("test user");
  expect(page.getByText("Hello, test user", { exact: true }));
});
