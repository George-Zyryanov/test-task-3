import { type Locator, type Page, BrowserContext } from '@playwright/test';

export class SingleTitlePage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly movieTitle : Locator;
    readonly movieRating : Locator;
    readonly movieReleaseYear: Locator;
    
    constructor(page: Page, context : BrowserContext) {
        this.page = page;
        this.context = context;
        this.movieTitle = page.getByTestId('hero__primary-text');
        this.movieRating = page.getByRole('link', { name: 'View User Ratings' })
        this.movieReleaseYear = page.getByTestId('hero-parent').getByRole('link', { name: /^\d{4}$/ });
    }
}