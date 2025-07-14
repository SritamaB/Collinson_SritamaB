import { test, expect } from '@playwright/test';
import getWeatherData from '../API/weatherService';
import * as locators from './locator_paths'; // Import all exported members as 'locators' from locator_paths
import config from '../playwright.config'; // Import baseURL from config file
import * as helperAssertions from './HelperAssertion';

test.describe('Weather Service UI Tests', () => {   
    
    
    test.beforeEach(async ({ page }) => {
        console.log('Test starting...');
        await page.goto(config.use.baseURL); // Navigate to the base URL of your application and Adjust the baseURL as needed
        await page.waitForLoadState('networkidle'); // Wait for the page to load completely
        console.log('Page loaded successfully.');
    });
  
    test.afterEach(async ({ page }) => {
        console.log('✅ Test completed. Cleaning up...');
        await page.click(locators.clearData); // Assuming there's a button to clear data
        //take a screenshot after each test
        await page.screenshot({ path: `screenshots/test-${Date.now()}.png` });
    });

    test('should display weather data for Cape Town', async ({ page }) => {
        
        await page.fill(locators.CityInput, 'CapeTown'); // Assuming there's an input field with id 'city-input'
        await page.click(locators.GetActvities); // Assuming there's a button with id 'get-weather-button'
        
        const weatherData = await getWeatherData('CapeTown');
        await helperAssertions.GetActivitiesAsserted(page, weatherData);
    });

    test('should handle unknown city input', async ({ page }) => {
        
        await page.fill(locators.CityInput, 'UnknownCity');
        await page.click(locators.GetActvities);
        const errorMessage = await page.locator(locators.errorMessage).textContent(); // Assuming there's an element to show error
        expect(errorMessage).toBe('City not found');
    });

    test('should autocomplete city input', async ({ page }) => {
        
        await page.fill(locators.CityInput, 'Cape');
        const suggestions =  await page.locator(locators.suggestion).allTextContents(); // Assuming there's a list of suggestions
        expect(suggestions).toContain('Cape Town');
        const TotalSuggestion = await page.locator(locators.suggestion).count();
        const matchText = 'Cape Town';
        for (let i = 0; i < TotalSuggestion; i++) 
        {
            const suggestionCity= await page.locator(locators.suggestion).nth(i).textContent();
            if (suggestionCity && suggestionCity.trim().toLowerCase() === matchText.trim().toLowerCase()) 
            {
                await page.locator(locators.suggestion).nth(i).click();
                break; // Exit loop if match is found
            }
        }
        await page.click(locators.GetActvities); // Click the button to get activities
        const weatherData = await getWeatherData('CapeTown');        
        await helperAssertions.GetActivitiesAsserted(page, weatherData);
    });  

})