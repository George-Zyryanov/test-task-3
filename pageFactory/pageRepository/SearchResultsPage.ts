import { Locator, Page, BrowserContext } from '@playwright/test';

export class SearchResultsPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly allSearchResults : Locator;
    
    constructor(page: Page, context : BrowserContext) {
        this.page = page;
        this.context = context;
        this.allSearchResults = page.getByTestId('find-results-section-title');
    }

    async clickSearchResultWithTitle(title : string) {
        await this.allSearchResults.getByRole('link', { name: title }).first().click();
    }

}