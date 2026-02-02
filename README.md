# Akan-Name-Generator #
 This is a web application that calculates the day of the week a user was born and assigns them an Akan name based on their gender. 
 Akan names come from Ghanaian culture
 Children are named based on the day they were born.


 ### Technologies Used ###
  1. HTML
  2. CSS
  3. JAVASCRIPT

  ### Installation Guide ###
  1. Clone/Download the repository
  2. Open index.html in your browser

## Behaviour-Driven-Development (BDD) ##

The Akan Name Generator behaves as follows:

Scenario 1: User enters valid birthdate and selects gender

Given the user is on the Akan Name Generator page
When the user enters a valid day, month, year, and selects a gender
And clicks the “Submit” button
Then the user should see their corresponding Akan name displayed on the page

Scenario 2: User enters invalid day or month

Given the user enters a day less than 1 or greater than 31
Or a month less than 1 or greater than 12
When the user clicks “Submit”
Then an alert should appear telling the user to enter a valid date

Scenario 3: User does not select a gender

Given the user fills in a valid date but does not select a gender
When the user clicks “Submit”
Then an alert should appear telling the user to select a gender

Scenario 4: User receives Akan name

Given the user enters valid inputs and clicks “Submit”
When the calculation is completed
Then the user sees their Akan name corresponding to the day of the week they were born

### Live Link ###
View the live link of the server: 

## Author ##
    Bryan Gwendo

### Contact ###
For enquiries,
Tel No : 0714996237
Email : bryangwendo314@gmail.com