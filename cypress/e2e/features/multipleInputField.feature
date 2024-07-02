Feature: Verify Functionality of Dual Input Fields
    This test suite ensures the correctness of calculations involving two input fields.

    Background: Open the application
        Given the users open the application
        When the users access the simple form section and locate the input fields for two values

    Scenario: Validate addition of negative numbers
        When the users input "<num1>" and "<num2>"
        And the users click the calculate button
        Then the result should display the sum of "<num1>" and "<num2>"

        Examples:
        | num1 | num2 |
        | -8   | -3   |

    Scenario: Validate addition of decimal numbers
        When the users input "<num1>" and "<num2>"
        And the users click the calculate button
        Then the result should display the sum of "<num1>" and "<num2>"

        Examples:
        | num1 | num2 |
        | 2.5  | 3.6  |

    Scenario: Validate addition of positive numbers
        When the users input "<num1>" and "<num2>"
        And the users click the calculate button
        Then the result should display the sum of "<num1>" and "<num2>"

        Examples:
        | num1 | num2 |
        | 20   | 30   |

