Feature: Bootstrap Alert Validations
    This suite validates the behavior of bootstrap alert messages.

    Background: Launch application
        Given users open the application to test bootstrap alerts

    Scenario: Verify autoclosable <type> message appears
        When users navigate to the bootstrap alert section
        And users trigger the autoclosable "<type>" alert
        Then an autoclosable "<type>" alert is shown
        Examples:
        | type    |
        | success |

    Scenario: Verify autoclosable <type> message disappears after <seconds> seconds
        When users navigate to the bootstrap alert section
        And users trigger the autoclosable "<type>" alert
        And users wait for <seconds> seconds
        Then the autoclosable "<type>" alert should no longer be visible
        Examples:
        | type    | seconds |
        | success | 5       |

    Scenario: Verify normal <type> message appears
        When users navigate to the bootstrap alert section
        And users trigger the normal "<type>" alert
        Then a normal "<type>" alert is shown
        Examples:
        | type    |
        | success |

    Scenario: Verify normal <type> message can be dismissed
        When users navigate to the bootstrap alert section
        And users trigger the normal "<type>" alert
        And users close the normal "<type>" alert
        Then the normal "<type>" alert should no longer be visible
        Examples:
        | type    |
        | success |

    Scenario: Verify autoclosable <type> message appears
        When users navigate to the bootstrap alert section
        And users trigger the autoclosable "<type>" alert
        Then an autoclosable "<type>" alert is shown
        Examples:
        | type    |
        | warning |

    Scenario: Verify autoclosable <type> message disappears after <seconds> seconds
        When users navigate to the bootstrap alert section
        And users trigger the autoclosable "<type>" alert
        And users wait for <seconds> seconds
        Then the autoclosable "<type>" alert should no longer be visible
        Examples:
        | type    | seconds |
        | warning | 3       |

    Scenario: Verify normal <type> message appears
        When users navigate to the bootstrap alert section
        And users trigger the normal "<type>" alert
        Then a normal "<type>" alert is shown
        Examples:
        | type    |
        | warning |

    Scenario: Verify normal <type> message can be dismissed
        When users navigate to the bootstrap alert section
        And users trigger the normal "<type>" alert
        And users close the normal "<type>" alert
        Then the normal "<type>" alert should no longer be visible
        Examples:
        | type    |
        | warning |

    Scenario: Verify autoclosable <type> message appears
        When users navigate to the bootstrap alert section
        And users trigger the autoclosable "<type>" alert
        Then an autoclosable "<type>" alert is shown
        Examples:
        | type    |
        | danger  |

    Scenario: Verify autoclosable <type> message disappears after <seconds> seconds
        When users navigate to the bootstrap alert section
        And users trigger the autoclosable "<type>" alert
        And users wait for <seconds> seconds
        Then the autoclosable "<type>" alert should no longer be visible
        Examples:
        | type    | seconds |
        | danger  | 5       |

    Scenario: Verify normal <type> message appears
        When users navigate to the bootstrap alert section
        And users trigger the normal "<type>" alert
        Then a normal "<type>" alert is shown
        Examples:
        | type    |
        | danger  |

    Scenario: Verify normal <type> message can be dismissed
        When users navigate to the bootstrap alert section
        And users trigger the normal "<type>" alert
        And users close the normal "<type>" alert
        Then the normal "<type>" alert should no longer be visible
        Examples:
        | type    |
        | danger  |

    Scenario: Verify autoclosable <type> message appears
        When users navigate to the bootstrap alert section
        And users trigger the autoclosable "<type>" alert
        Then an autoclosable "<type>" alert is shown
        Examples:
        | type    |
        | info    |

    Scenario: Verify autoclosable <type> message disappears after <seconds> seconds
        When users navigate to the bootstrap alert section
        And users trigger the autoclosable "<type>" alert
        And users wait for <seconds> seconds
        Then the autoclosable "<type>" alert should no longer be visible
        Examples:
        | type    | seconds |
        | info    | 6       |

    Scenario: Verify normal <type> message appears
        When users navigate to the bootstrap alert section
        And users trigger the normal "<type>" alert
        Then a normal "<type>" alert is shown
        Examples:
        | type    |
        | info    |

    Scenario: Verify normal <type> message can be dismissed
        When users navigate to the bootstrap alert section
        And users trigger the normal "<type>" alert
        And users close the normal "<type>" alert
        Then the normal "<type>" alert should no longer be visible
        Examples:
        | type    |
        | info    |
