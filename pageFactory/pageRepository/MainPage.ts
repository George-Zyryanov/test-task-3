import { Locator, Page, BrowserContext } from '@playwright/test';

export class MainPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly searchForm : Locator;

    constructor(page: Page, context : BrowserContext) {
        this.page = page;
        this.context = context;
        this.searchForm = page.getByTestId('suggestion-search');
    }

    async goto() {
        await this.page.goto('/'); 
    }

    async searchForTitle(title : string) {
        await this.searchForm.fill(title);
        await this.searchForm.press('Enter');
    }
}