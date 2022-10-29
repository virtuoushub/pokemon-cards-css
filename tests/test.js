import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Pokemon Cards V2');
});

test('index page has expected first h2', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h2')).toBe(
		"(Go ahead, try clicking a card, or press 'c' to take a closer look!)"
	);
});

test('index page has expected number h2 elements', async ({ page }) => {
	await page.goto('/');
	const elements = page.locator('h2');
	const isExpectedH2Count = await elements.evaluateAll((h2s, count) => h2s.length === count, 16);
	expect(isExpectedH2Count).toBeTruthy();
});
