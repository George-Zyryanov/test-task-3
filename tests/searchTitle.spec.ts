import { expect } from "@playwright/test";
import { createTestMetadata } from "../lib/TestMetaData";
import test from "../lib/BaseTest";

test('Verify Single Movie Page Title', createTestMetadata({
    testId: 'IMDB-001',
    testName: 'Elements are present on Single Title Page',
    description: 'Verify that title is present on Single Title Page for a film title search',
    linkInTestManagementSys: 'https://testmanagement.example.com/testcase/IMDB-001',
    priority: 'P2',
    author: 'George Zyryanov',
    linkToJiraTicket: 'https://jira.example.com/browse/JIRA-001',
    pageUnderTest: 'SingleFilmTitlePage',
    featureUnderTest: 'FilmTitleSearch',
}), async ({mainPage, searchResultsPage, singleTitlePage}) =>{
    const movieTitle = "Inception";

    // Navigate to main page
    await mainPage.goto();
    
    // Search for film title
    await mainPage.searchForTitle(movieTitle); // Move data to data folder
    
    // Clcik on the first search result
    await searchResultsPage.clickSearchResultWithTitle(movieTitle);

    // Verify title exosts on the Single Title Page
    await expect(singleTitlePage.movieTitle).toContainText(movieTitle);
})