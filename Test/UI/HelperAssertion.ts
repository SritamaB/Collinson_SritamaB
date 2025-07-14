import { test, expect } from '@playwright/test';
import getWeatherData from '../API/weatherService';
// Import all exported members as 'locators' from locator_paths
import * as locators from './locator_paths';
import config from '../playwright.config'; // Import baseURL from config file

async function GetActivitiesAsserted(page, APIResponse) {
    expect(await page.locator(locators.CityOutput).textContent()).toBe(APIResponse.city);
    let nthcount = 0; //we use this to track the nth element in the loop assuming there are multiple activities for each date and they all share the same element locators
    for (let i = 0; i < 8; i++) {
        // Assuming that date uses the same locator for each date with different nth index
        const date = await page.locator(locators.date).nth(i).textContent();
        expect(date).toBe(APIResponse.Date[i]);
        const activityData = APIResponse.activities.count();
        for (let j = 0; j < activityData; j++) {
            const activityName = await page.locator(locators.actvity).nth(nthcount).textContent(); // Assuming that activity uses the same locator for each activity with different nth index
            const activityRank = await page.locator(locators.actvity_Rank).nth(nthcount).textContent(); // Assuming that activity rank uses the same locator for each activity rank with different nth index
            const activityReason = await page.locator(locators.actvity_Reason).nth(nthcount).textContent(); // Assuming that activity reason uses the same locator for each activity reason with different nth index
            nthcount++;

            expect(activityName).toBeDefined();
            expect(activityRank).toBeDefined();
            expect(activityReason).toBeDefined();

            expect(activityName).toBe(APIResponse.activities[j].Activity_name);
            expect(activityRank).toBe(APIResponse.activities[j].Activity_rank.toString());
            expect(activityReason).toBe(APIResponse.activities[j].Activity_Reason);
        }
    }
}
export { GetActivitiesAsserted };