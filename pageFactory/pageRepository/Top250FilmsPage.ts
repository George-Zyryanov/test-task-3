import { type Locator, type Page, BrowserContext } from '@playwright/test';
import { BasePage } from './BasePage';

export class Top250FilmsPage extends BasePage {
    readonly firstFilmTitle: Locator;
    
    constructor(page: Page, context : BrowserContext) {
        super(page, context);
        this.firstFilmTitle = this.page.getByTestId('chart-layout-main-column').getByRole('heading').first();
    }

    async goto() {
        await super.goto('/chart/top');
    }

    async clickFirstFilmTitle() {
        await this.firstFilmTitle.click();
    }
}