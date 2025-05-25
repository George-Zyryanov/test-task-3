import { type Locator, type Page, BrowserContext } from '@playwright/test';

export class Top250FilmsPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly firstFilmTitle: Locator;
    
    constructor(page: Page, context : BrowserContext) {
        this.page = page;
        this.context = context;
        this.firstFilmTitle = this.page.getByTestId('chart-layout-main-column').getByRole('heading').first();
    }

    async goto() {
        await this.page.goto('/chart/top');
    }

    async clickFirstFilmTitle() {
        await this.firstFilmTitle.click();
    }
}