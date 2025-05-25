import { expect } from '@playwright/test';
import { createTestMetadata } from "../lib/TestMetaData";
import test from "../lib/BaseTest";

test('Verify Single Movie Page Elements', createTestMetadata({
    testId: 'IMDB-002',
    testName: 'Single Title Page Elements Verification',
    description: 'Verify that first title from the top 250 movies can be opend and contains correct elements',
    linkInTestManagementSys: 'https://testmanagement.example.com/testcase/IMDB-002',
    priority: 'P2',
    author: 'George Zyryanov',
    linkToJiraTicket: 'https://jira.example.com/browse/JIRA-002',
    pageUnderTest: 'SingleFilmTitlePage',
    featureUnderTest: 'top250Films',
}), async ({singleTitlePage, top250FilmsPage}) =>{
    
    // Navigate to Top 250 Films page
    await top250FilmsPage.goto();
    
    // Click on the first film title
    await top250FilmsPage.clickFirstFilmTitle();

    // Verify rating, title and year are visible on the Single Title Page
    await expect(singleTitlePage.movieRating).toBeVisible();
    await expect(singleTitlePage.movieTitle).toBeVisible();
    await expect(singleTitlePage.movieReleaseYear).toBeVisible();
})