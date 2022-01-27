$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Exam.feature");
formatter.feature({
  "line": 2,
  "name": "user able to change color background",
  "description": "",
  "id": "user-able-to-change-color-background",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@changecolor"
    }
  ]
});
formatter.before({
  "duration": 2937226400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Set SkyBlue Background\" button exists",
  "description": "",
  "id": "user-able-to-change-color-background;set-skyblue-background\"-button-exists",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@FirstScenario"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "usen on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user able to clik",
  "keyword": "When "
});
formatter.match({
  "location": "ChangeColors.usen_on_the_homepage()"
});
formatter.result({
  "duration": 1398194300,
  "status": "passed"
});
formatter.match({
  "location": "ChangeColors.user_able_to_clik()"
});
formatter.result({
  "duration": 90718500,
  "status": "passed"
});
formatter.before({
  "duration": 1824482000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "White Background Change",
  "description": "",
  "id": "user-able-to-change-color-background;white-background-change",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@SecondScenario"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "usen on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "\"Set SkyWhite Background\" button exists",
  "keyword": "When "
});
formatter.match({
  "location": "ChangeColors.usen_on_the_homepage()"
});
formatter.result({
  "duration": 910260600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyWhite Background",
      "offset": 1
    }
  ],
  "location": "ChangeColors.button_exists(String)"
});
formatter.result({
  "duration": 94967600,
  "status": "passed"
});
});