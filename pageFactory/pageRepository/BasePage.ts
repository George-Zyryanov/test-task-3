import { Page, BrowserContext, Locator } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        if (context) {
            this.context = context;
        }
    }

    private async _handleConsentPopup(): Promise<void> {
        const acceptButton = this.page.getByTestId('accept-button');
        try {
            await acceptButton.waitFor({ state: 'visible', timeout: 5000 });
            await acceptButton.click();
            console.log('Accepted consent popup.');
        } catch (error) {
            // Element not visible within timeout, assume it's not there or already handled
            console.log('Consent popup not found or already handled.');
        }
    }

    async goto(path: string): Promise<void> {
        await this.page.goto(path);
        await this._handleConsentPopup();
    }
} 