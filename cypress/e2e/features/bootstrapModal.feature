Feature: Bootstrap Modals Testing
    This feature ensures the functionality and validation of bootstrap modals.

    Background: Open application
        Given users access the application to test bootstrap modals

    Scenario: Verify single modal launches correctly
        When users navigate to the bootstrap modal page
        And users click to open the single modal
        Then the single modal should be visible

    Scenario: Verify modal has a header section
        When users navigate to the bootstrap modal page
        And users click to open the single modal
        Then the modal should contain a header

    Scenario: Verify modal contains body content
        When users navigate to the bootstrap modal page
        And users click to open the single modal
        Then the modal should display body content

    Scenario: Verify modal has a close button
        When users navigate to the bootstrap modal page
        And users click to open the single modal
        Then the modal should include a close button

    Scenario: Verify modal hides after closing with close button
        When users navigate to the bootstrap modal page
        And users click to open the single modal
        And users click the modal's close button
        Then the modal should no longer be visible

    Scenario: Verify modal hides after closing with cancel icon
        When users navigate to the bootstrap modal page
        And users click to open the single modal
        And users click the modal's cancel icon
        Then the modal should no longer be visible

    Scenario: Verify modal has a save button
        When users navigate to the bootstrap modal page
        And users click to open the single modal
        Then the modal should include a save button

    Scenario: Verify app refreshes and modal hides after saving
        When users navigate to the bootstrap modal page
        And users click to open the single modal
        And users click the modal's save button
        Then the modal should no longer be visible

    Scenario: Verify multiple modals can be launched
        When users navigate to the bootstrap modal page
        And users click to open the first modal
        And users click to open the second modal
        Then the first modal should be visible
        And the second modal should be visible

    Scenario: Verify second modal closes with close button
        When users navigate to the bootstrap modal page
        And users click to open the first modal
        And users click to open the second modal
        And users click the second modal's close button
        Then the second modal should no longer be visible

    Scenario: Verify second modal closes with cancel icon
        When users navigate to the bootstrap modal page
        And users click to open the first modal
        And users click to open the second modal
        And users click the second modal's cancel icon
        Then the second modal should no longer be visible

    Scenario: Verify second modal saves correctly
        When users navigate to the bootstrap modal page
        And users click to open the first modal
        And users click to open the second modal
        And users click the second modal's save button
        Then the second modal should no longer be visible

    Scenario: Verify first modal closes with close button
        When users navigate to the bootstrap modal page
        And users click to open the first modal
        And users click the first modal's close button
        Then the first modal should no longer be visible

    Scenario: Verify first modal closes with cancel icon
        When users navigate to the bootstrap modal page
        And users click to open the first modal
        And users click the first modal's cancel icon
        Then the first modal should no longer be visible

    Scenario: Verify first modal saves correctly
        When users navigate to the bootstrap modal page
        And users click to open the first modal
        And users click the first modal's save button
        Then the first modal should no longer be visible
