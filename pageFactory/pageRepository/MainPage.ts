import { Locator, Page, BrowserContext } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
    readonly searchForm : Locator;

    constructor(page: Page, context : BrowserContext) {
        super(page, context);
        this.searchForm = page.getByTestId('suggestion-search');
    }

    async goto() {
        await super.goto('/');
    }

    async searchForTitle(title : string) {
        await this.searchForm.fill(title);
        await this.searchForm.press('Enter');
    }
}