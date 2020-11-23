## When

> Keywords implemented under gherkin pre-word : WHEN

---

### When I create new session on _{appium server url}_

_This keyword will create session and connect to Appium Server given the {appium server url}_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
   When I create new session on "http://0.0.0.0:4723/wd/hub"
```

_The example above will try to connect on the appium server 'http://0.0.0.0:4723/wd/hub'_

---
