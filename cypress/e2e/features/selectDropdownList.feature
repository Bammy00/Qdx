Feature: Select List Demo
  This test suite validates both single and multi-select list functionalities.

  Background: Navigate into app
    Given users navigate to the app

  # Multi-select scenarios
  Scenario: Verify multiple items can be selected
    When user opens the multi-select list page
    And user selects the following options:
      | New York    |
      | Washington  |
    Then the following items should be selected:
      | New York    |
      | Washington  |

  Scenario: Verify selected items can be deselected one after the other
    When user opens the multi-select list page
    And user selects the following options:
      | Florida     |
      | Texas       |
      | Pennsylvania|
    And user deselects the following items:
      | Florida     |
      | Texas       |
      | Pennsylvania|
    Then the following items should not be selected:
      | Florida     |
      | Texas       |
      | Pennsylvania|

  Scenario: Verify all selected options are retrieved when 'Get All Selected' is clicked
    When user opens the multi-select list page
    And user selects the following options:
      | California  |
      | Florida     |
      | New Jersey  |
      | Texas       |
      | Pennsylvania|
    And user clicks on 'Get All Selected' button
    Then all selected options should be:
      | California  |
      | Florida     |
      | New Jersey  |
      | Texas       |
      | Pennsylvania|

  Scenario: Verify single selected option is retrieved when 'Get All Selected' is clicked
    When user opens the multi-select list page
    And user selects the following option:
      | Florida     |
    And user clicks on 'Get All Selected' button
    Then all selected options should be:
      | Florida     |

  Scenario: Verify first selected option is retrieved when 'First Selected' button is clicked
    When user opens the multi-select list page
    And user selects the following options:
      | New York    |
      | Washington  |
    And user clicks on 'First Selected' button
    Then the first selected option should be:
      | New York    |

  Scenario: Verify all options can be selected with ctrl+A key
    When user opens the multi-select list page
    And user presses ctrl+A
    Then all items should be selected

  Scenario: Verify all selected options are retrieved with ctrl+A and 'Get All Selected' button
    When user opens the multi-select list page
    And user presses ctrl+A
    And user clicks on 'Get All Selected' button
    Then all selected options should be:
      | California  |
      | Florida     |
      | New Jersey  |
      | New York    |
      | Ohio        |
      | Texas       |
      | Pennsylvania|
      | Washington  |

  Scenario: Verify first selected option is retrieved when selecting sequentially and clicking 'First Selected'
    When user opens the multi-select list page
    And user selects the following options:
      | Ohio        |
      | Texas       |
      | Pennsylvania|
      | Washington  |
    And user clicks on 'First Selected' button
    Then the first selected option should be:
      | Ohio        |

  Scenario: Verify all selected options are retrieved when selecting sequentially and clicking 'Get All Selected'
    When user opens the multi-select list page
    And user selects the following options:
      | Ohio        |
      | Texas       |
      | Pennsylvania|
      | Washington  |
    And user clicks on 'Get All Selected' button
    Then all selected options should be:
      | Ohio        |
      | Texas       |
      | Pennsylvania|
      | Washington  |

  # Single-select scenarios
  Scenario Outline: Verify <day> can be selected from the dropdown list
    When user opens the single-select list page
    And user selects "<day>" from the dropdown
    Then the selected "<day>" should be displayed successfully

    Examples:
      | day      |
      | Monday   |
      | Tuesday  |
      | Wednesday|
      | Thursday |
      | Friday   |
      | Saturday |
      | Sunday   |
