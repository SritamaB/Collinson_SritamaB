const SevenDayForecast= require('./weatherService');

describe('Weather Service', () => {
    test('should return weather data for City', async () => {
        const responseActivity = await SevenDayForecast('CapeTown','forecast');
        /* Assuming following is the structure of the response
        const response = [
        {
        date: '01/05/2025',
        activities: [
            { rank: 1, activity: 'ski', reson: 'Good snow' },
            { rank: 2, activity: 'cycle', reson: 'Clear weather' }
        ]
        },
        {
        date: '02/05/2025',
        activities: [
            { rank: 1, activity: 'ski', reson: 'Good snow' },
            { rank: 2, activity: 'cycle', reson: 'Clear weather' }
        ]
        }
     ]; 
    */
        expect(Array.isArray(responseActivity)).toBe(true);
        responseActivity.forEach(day => {
            expect(day).toHaveProperty('date');
            expect(day).toHaveProperty('activities');
            expect(Array.isArray(day.activities)).toBe(true);
            day.activities.forEach(activity => {
                expect(activity).toHaveProperty('rank');
                expect(activity).toHaveProperty('activity');
                expect(activity).toHaveProperty('reason');
            });
        });
    });
    
    test('should throw an error for an unknown city', async () => {
        try {
            await SevenDayForecast('UnknownCity', 'forecast');
        } catch (error) {
            expect(error.message).toBe('City not found');
        }
    });
    test('should return error for invalidEndpoint', async () => {
        const response = await SevenDayForecast('CapeTown','invalidEndpoint');
        expect(response).toBe(404);
    });

    test('should return 400 status', async () => {
        const response = await SevenDayForecast('CapeTown','400');
        expect(response).toBe(400);
    });

    test('should return timeout status', async () => {
        const response = await SevenDayForecast('CapeTown','timeout');
        expect(response).rejects.toThrow('Request timed out');;
    });

});