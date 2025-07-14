```
GHERKIN S c e n a r i o s


Scenario 1

```
Feature: Ranking activities based on the weather of a City
GIVEN : the user has a valid city name
WHEN the user Enters the City Name
AND click the 'Get Activities' Button
THEN a list of actvities sorted by ranking and reason are displayed on the page
```
Scenario 2
```
Feature: Error message when city name is not vaid
GIVEN : the user has an Invalid city name
WHEN the user Enters the City Name
AND click the 'Get Activities' Button
THEN An Error message is displayed on the page
```
Scenario 3
```
Feature: Error message when there is a timeout error from the server side( this test
can be realised most efficiently via the automation suite )
GIVEN : the user has a valid city name
AND : a timeout error is simulated
WHEN the user Enters the City Name
AND click the 'Get Activities' Button
THEN the loading icon is displayed
AND after x seconds An Error message is displayed on the page
```
Scenario 4
```
Feature: Error message when there are no cities compatible with autocomplete
GIVEN : the user has an invalid city name
WHEN the user types the City Name
THEN the autofill dropdown show the message 'No City Found'
```
Scenario 5
```
Feature: Error message when there are evacuation alerts
GIVEN : the user has an valid city name
AND there is an evaucation alert for the city
WHEN the user types the City Name
AND Clicks on the 'Get Activities' Button
THEN the page displays in BOLD RED the evaucation alert
AND no activities are displayed