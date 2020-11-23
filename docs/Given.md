## Given

> Keywords implemented under gherkin pre-word : GIVEN

---

### Given that I set _{device platform}_ as platform with version of _{OS version}_

_This keyword will initialize device capability such as device platform and the OS version_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
```

_The example above is defining a step having Android as device platform and having Android version 10_

---

### Given that I set _{device name}_ as device

_This keyword will initialize device capability such as device name_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
```

_The example above is defining a step having **emulator-5554** as device name_
_You can check the exact device name by executing **adb devices** on **command line**_

---

### Given that app is located as _{binary path}_

_This keyword will initialize device capability such as application or app_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
```

_The example above is defining a step having **http://apksample.ueuo.com/apk/Kids.apk** as Android application build path_
_You can use **apk file** on Android and **ipa file** on IOS, also application build path can also reside on your local e.g. c:\\\MyaApp\\\Kids.apk_

---
