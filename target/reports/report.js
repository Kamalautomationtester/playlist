$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/televisions.feature");
formatter.feature({
  "line": 1,
  "name": "Verify the functionality of television landing page",
  "description": "",
  "id": "verify-the-functionality-of-television-landing-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3871272061,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on television landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTelevisionLandingPage()"
});
formatter.result({
  "duration": 6371449771,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify I can only add maximum 4 tv’s for comparison",
  "description": "",
  "id": "verify-the-functionality-of-television-landing-page;verify-i-can-only-add-maximum-4-tv’s-for-comparison",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@implemented"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have at least 5 televisions listed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I have added 4 televisions to comparison",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I attempt to add an another one",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see \"You already have 4 products for comparison\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.iHaveAtLeastTelevisionsListed(int)"
});
formatter.result({
  "duration": 180591488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.iHaveAddedTelevisionsToComparison(int)"
});
formatter.result({
  "duration": 12576239157,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAttemptToAddAnAnotherOne()"
});
formatter.result({
  "duration": 2181080756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You already have 4 products for comparison",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.iShouldSee(String)"
});
formatter.result({
  "duration": 40973314,
  "status": "passed"
});
formatter.after({
  "duration": 171216489,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Verify filter for brands",
  "description": "",
  "id": "verify-the-functionality-of-television-landing-page;verify-filter-for-brands",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@implemented"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I filter for \"\u003cbrand\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should only see \"\u003cbrand\u003e\" televisions",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "verify-the-functionality-of-television-landing-page;verify-filter-for-brands;",
  "rows": [
    {
      "cells": [
        "brand"
      ],
      "line": 18,
      "id": "verify-the-functionality-of-television-landing-page;verify-filter-for-brands;;1"
    },
    {
      "cells": [
        "samsung"
      ],
      "line": 19,
      "id": "verify-the-functionality-of-television-landing-page;verify-filter-for-brands;;2"
    },
    {
      "cells": [
        "sony"
      ],
      "line": 20,
      "id": "verify-the-functionality-of-television-landing-page;verify-filter-for-brands;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2974276973,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on television landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTelevisionLandingPage()"
});
formatter.result({
  "duration": 6259579273,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify filter for brands",
  "description": "",
  "id": "verify-the-functionality-of-television-landing-page;verify-filter-for-brands;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@implemented"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I filter for \"samsung\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should only see \"samsung\" televisions",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "samsung",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.iFilterFor(String)"
});
formatter.result({
  "duration": 2394245289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samsung",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iShouldOnlySeeTelevisions(String)"
});
formatter.result({
  "duration": 13669034599,
  "status": "passed"
});
formatter.after({
  "duration": 148067932,
  "status": "passed"
});
formatter.before({
  "duration": 3057877601,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on television landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTelevisionLandingPage()"
});
formatter.result({
  "duration": 6979469848,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify filter for brands",
  "description": "",
  "id": "verify-the-functionality-of-television-landing-page;verify-filter-for-brands;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@implemented"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I filter for \"sony\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should only see \"sony\" televisions",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sony",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.iFilterFor(String)"
});
formatter.result({
  "duration": 2451007508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sony",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iShouldOnlySeeTelevisions(String)"
});
formatter.result({
  "duration": 13245373551,
  "status": "passed"
});
formatter.after({
  "duration": 158639637,
  "status": "passed"
});
formatter.before({
  "duration": 2993999498,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on television landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTelevisionLandingPage()"
});
formatter.result({
  "duration": 6090290546,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify ClearAll button clears the filters",
  "description": "",
  "id": "verify-the-functionality-of-television-landing-page;verify-clearall-button-clears-the-filters",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@implemented"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I note televisions count",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I filter for \"samsung\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "it filters",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I clearAll the filter",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I should see original television count",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iHaveTelevisionsListed()"
});
formatter.result({
  "duration": 211557418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samsung",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.iFilterFor(String)"
});
formatter.result({
  "duration": 2252981080,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.itFilters()"
});
formatter.result({
  "duration": 30644596,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClearAllTheFilter()"
});
formatter.result({
  "duration": 4129746298,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeOriginalTelevisionCount()"
});
formatter.result({
  "duration": 2036405812,
  "status": "passed"
});
formatter.after({
  "duration": 166829623,
  "status": "passed"
});
formatter.before({
  "duration": 3309961217,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on television landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTelevisionLandingPage()"
});
formatter.result({
  "duration": 6845347190,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify sort works for price low to high",
  "description": "",
  "id": "verify-the-functionality-of-television-landing-page;verify-sort-works-for-price-low-to-high",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@implemented"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I sort \"Price (low to high)\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I should see televisions sorted from low to high",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Price (low to high)",
      "offset": 8
    }
  ],
  "location": "MyStepdefs.iSort(String)"
});
formatter.result({
  "duration": 1414309208,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeTelevisionsSortedFromLowToHigh()"
});
formatter.result({
  "duration": 35269637725,
  "status": "passed"
});
formatter.after({
  "duration": 153408961,
  "status": "passed"
});
formatter.before({
  "duration": 3035545279,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on television landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTelevisionLandingPage()"
});
formatter.result({
  "duration": 6581800848,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify default sort of Most-recently tested first",
  "description": "",
  "id": "verify-the-functionality-of-television-landing-page;verify-default-sort-of-most-recently-tested-first",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@implemented"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I should see \"Most-recently tested\" selected by default",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I should see the lastly tested televisions first",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Most-recently tested",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.iShouldSeeSelectedByDefault(String)"
});
formatter.result({
  "duration": 227931794,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSeeTheLastlyTestedTelevisionsFirst()"
});
formatter.result({
  "duration": 34906336113,
  "status": "passed"
});
formatter.after({
  "duration": 150738533,
  "status": "passed"
});
formatter.before({
  "duration": 2986194553,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on television landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTelevisionLandingPage()"
});
formatter.result({
  "duration": 5991268830,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify multiple filters",
  "description": "",
  "id": "verify-the-functionality-of-television-landing-page;verify-multiple-filters",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@pending"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I filter for “samsung”",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I filter for “Full HD”",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I should see only samsung Full HD televisions",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 145663371,
  "status": "passed"
});
formatter.before({
  "duration": 2907018585,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on television landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTelevisionLandingPage()"
});
formatter.result({
  "duration": 6641327372,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Show More button shows all available filter options",
  "description": "",
  "id": "verify-the-functionality-of-television-landing-page;show-more-button-shows-all-available-filter-options",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@pending"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I click on “Show more” under “Brands”",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I should see all the brands for filtering",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 158992279,
  "status": "passed"
});
});