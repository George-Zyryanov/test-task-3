import { TestInfo, test as baseTest } from '@playwright/test';
import { MainPage } from '../pageFactory/pageRepository/MainPage';
import { SearchResultsPage } from '../pageFactory/pageRepository/SearchResultsPage';
import { SingleTitlePage } from '../pageFactory/pageRepository/SingleTitlePage';
import { Top250FilmsPage } from '../pageFactory/pageRepository/Top250FilmsPage';


const test = baseTest.extend<{
    mainPage: MainPage;
    searchResultsPage: SearchResultsPage;
    singleTitlePage: SingleTitlePage;
    top250FilmsPage: Top250FilmsPage;
}>({
    mainPage: async ({ page, context }, use) => {
        await use(new MainPage(page, context));
    },
    searchResultsPage: async ({ page, context }, use) => {
        await use(new SearchResultsPage(page, context));
    },
    singleTitlePage: async ({ page, context }, use) => {
        await use(new SingleTitlePage(page, context));
    },
    top250FilmsPage: async ({ page, context }, use) => {
        await use(new Top250FilmsPage(page, context));
    }
})

export default test;