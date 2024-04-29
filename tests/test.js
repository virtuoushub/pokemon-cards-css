import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Pokemon Cards V2');
});

test('index page has expected first h2', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h2')).toBe(
		"Click on a Card to take a Closer look!"
	);
});

test('index page has expected number h2 elements', async ({ page }) => {
	await page.goto('/');
	const h2Elements = page.locator('h2');
	await expect(h2Elements).toHaveCount(20);
});
