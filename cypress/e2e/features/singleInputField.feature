Feature: Validating Single Input Fields
    This suite verifies the functionality of single input fields.

    Background: Open the Selenium demo app
        Given users access the Selenium demo application

    Scenario: Verify input field is enabled
        When users navigate to the simple form page
        And users type "<input_text>" in the input field
        Then the input field should be enabled

        Examples:
        | input_text   |
        | Hello world  |

    Scenario: Verify input field accepts string input
        When users navigate to the simple form page
        And users type "<input_text>" in the input field
        Then the input field should accept "<input_text>"

        Examples:
        | input_text     |
        | Hello People   |

    Scenario: Verify message appears below input field upon clicking show message button
        When users navigate to the simple form page
        And users type "<input_text>" in the input field
        And users click the show message button
        Then the displayed message should be "<input_text>"

        Examples:
        | input_text    |
        | Welcome Home  |

    Scenario: Verify input field accepts integer input
        When users navigate to the simple form page
        And users type "<input_integer>" in the input field
        Then the input field should accept "<input_integer>"

        Examples:
        | input_integer |
        | 450           |

    Scenario: Verify integer appears below input field upon clicking show message button
        When users navigate to the simple form page
        And users type "<input_integer>" in the input field
        And users click the show message button
        Then the displayed message should be "<input_integer>"

        Examples:
        | input_integer |
        | 450           |

    Scenario: Verify input field accepts special character input
        When users navigate to the simple form page
        And users type "<input_special>" in the input field
        Then the input field should accept "<input_special>"

        Examples:
        | input_special |
        | @!@@(__)      |

    Scenario: Verify special character appears below input field upon clicking show message button
        When users navigate to the simple form page
        And users type "<input_special>" in the input field
        And users click the show message button
        Then the displayed message should be "<input_special>"

        Examples:
        | input_special |
        | @!@@(__)      |

    Scenario: Verify no limit to the length of message input
        When users navigate to the simple form page
        And users type "<long_text>" in the input field
        And users click the show message button
        Then the displayed message should be "<long_text>"

        Examples:
        | long_text |
        | An interesting thing about this text generator is that it gives us the option to choose which characters in the show we want to quote. For us, the two best will undeniably be Heisenberg himself and Pinkman, which have some of the best lines in the entire series.With all of that said, its true that these quotes are bound to reflect both the humour and the violence in the show. While most people will welcome the humour, its possible that not everyone will be down with the violence and constant references to meth. What can you do, right |
