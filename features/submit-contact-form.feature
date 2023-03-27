Feature: remax.ca

  Scenario: Share a home on remax.ca
    Given I am on remax.ca
    When I search for "Vancouver, BC"
    And I select "Vancouver, BC, Canada" in the dropdown
    Then I select the first property 
    And I click on "Contact Agent" button
    Then I fill out the contact form
    Then I should see a success message 
  