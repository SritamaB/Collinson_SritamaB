* Overview of my approach  
  * For my automations tests: The key factors determining my approach were:  
    * Reusability: the same logic can be used for multiple tests. This is the reason i have modularized my tests, for eg: we may need to test output for multiple combinations of positive scenario. Instead of writing the same assertions for every test, I created another file with helper assertions that can be imported when needed. Although in this case, there was only one function, but that can be expanded further  
    * Clean Code: The above example can be used for this too. It helps in the readability of the code, since we don't have too heavy files with same lines of codes again and again. Instead, we have tests that fulfil certain scenarios, which when needed can import assertions that are needed frequently.  
    * Maintainability: This also helps in maintenance, since if there are any updates that need to be done, we can make the changes in one specific file and then those changes would be reflected in the entire codebase  
    * Efficiency: The code and scenarios  covered should be efficient enough to be able to be integrated into the deployment pipeline

  * For my Manual tests: The key Factors determining my approach are:  
    * The tests designed (the end to end scenario) should be complete in it’s nature. That is in the same scenario, we handle some key negative scenarios and also positive scenarios for an end to end flow of the functionality  
    * The steps designed should be clear enough so that even for someone who has not designed the tests should be able to follow and execute the test  
    * The expected results should be clear and detailed in their expectations.

  * For my GHERKIN Scenarios: The key factors determining my approach were:  
    * Understanding what the user may do or how they would interact with the application and the expected results  
    * The scenarios should be short, readable by non developers and specific and outcome driver. Their outcomes should be singular in nature  
    * Not to use too technical jargon.  
    * Test Happy, negative and edge cases.

* Trade off and omissions  
  * A lot of assumptions went into the structure of the response, because of which I was not accurately able to test the feature's expected behaviour  
  * Performance testing was included in the scenarios where we can test if the API can endure multiple users at the same time  
  * Assumption was made that the API is open in its nature and doesn't need authorisation to be accessed  
  * Every scenario for the UI elements (colour shape etc) couldn't be realised to keep tests fast and affordable  
  * For negative scenarios, esp when interacting with an external API, they can only be mocked. Sometimes the real world scenarios can be outside that.

* How AI helped:  
  * While for logic and testing approach, AI is not the best tool, since it is highly dependent on the prompts and the model behind it. It is certainly however, very useful for confirming syntactical error and helping with suggestions to fix it (Co-pilot). I have also found it very useful for researching, i.e : if there are specific methods or trade off between 2 methods to realise the same operation.   
    

      
      
