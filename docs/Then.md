## Then

> Keywords implemented under gherkin pre-word : THEN

---

### Then I wait _{number of seconds}_ seconds

_This keyword will fire a delay seconds from the given amount of seconds_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
   When I create new session on "http://0.0.0.0:4723/wd/hub"
   Then I wait 5 seconds
```

_The example above will execute 5 seconds delay_

---

### Then I capture mobile screen as _{screenshot location}_

_This keyword will screenshot the current device screen and save the file to '{screenshot location}'_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
   When I create new session on "http://0.0.0.0:4723/wd/hub"
   Then I wait 5 seconds
   Then I capture mobile screen as "c:\\screenshots\\window1.jpg"
```

_The example above will take screenshot on the current device screen and save it to 'c:\\screenshots\\window1.jpg'_

---

### Then I swipe to the _{swipe direction}_

_This keyword will execute swipe action having the direction '{swipe direction}'_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
   When I create new session on "http://0.0.0.0:4723/wd/hub"
   Then I wait 5 seconds
   Then I swipe to the "left"
```

_The example above will swipe the mobile screen to 'left'_

---

### Then I tap on element with accessibility id of _{accessibility id}_

_This keyword will execute tap action having the given element accessibility id '{accessibility id}'_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
   When I create new session on "http://0.0.0.0:4723/wd/hub"
   Then I wait 5 seconds
   Then I tap on element with accessibility id of "btn_register"
```

_The example above will tap the mobile screen on element that has accessibility id 'btn_register'_

---

### Then I tap on element with xpath of _{xpath locator}_

_This keyword will execute tap action having the given element xpath locator '{xpath locator}'_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
   When I create new session on "http://0.0.0.0:4723/wd/hub"
   Then I wait 5 seconds
   Then I tap on element with xpath of "//android.widget.Button[2]"
```

_The example above will tap the mobile screen on element that has xpath locator '//android.widget.Button[2]'_

---

### Then I tap on _{x axis}_, _{y axis}_

_This keyword will execute tap action x and y axis coordinates of the device screen_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
   When I create new session on "http://0.0.0.0:4723/wd/hub"
   Then I wait 5 seconds
   Then I tap on "29", "250"
```

_The example above will tap the mobile screen on element that x and y axis coordinates '29', '250' respectively_

---

### Then I set _{text value}_ value to element with accessibility id of _{accessibility id}_

_This keyword will input '{text value} on field element having accessibility id of '{accessibility id}'_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
   When I create new session on "http://0.0.0.0:4723/wd/hub"
   Then I wait 5 seconds
   Then I set "My name" value to element with accessibility id of "btn_register"
```

_The example above will input text value 'My name' to the field element that has accessibility id 'btn_register'_

---

### Then I set _{text value}_ value to element with xpath of _{xpath locator}_

_This keyword will input '{text value} on field element having xpath value of '{accessibility id}'_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
   When I create new session on "http://0.0.0.0:4723/wd/hub"
   Then I wait 5 seconds
   Then I set "My name" value to element with xpath of "//android.widget.Button[2]"
```

_The example above will input text value 'My name' to the field element that has xpath value of 'btn_register'_

---

### Then I expect element with accessibility id of _{accessibility id}_ has value _{text value}_

_This keyword will assert the text element value having accessibility id of '{accessibility id}' on expected text value of '{text value}'_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
   When I create new session on "http://0.0.0.0:4723/wd/hub"
   Then I wait 5 seconds
   Then I expect element with accessibility id of "btn_register" has value "My name"
```

_The example above will assert the text element value having accessibility id of 'btn_register' on expected text value of My name'_

---

### Then I expect element with xpath of _{xpath locator}_ has value _{text value}_

_This keyword will assert the text element value having xpath locator value of '{xpath locator}' on expected text value of '{text value}'_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
   When I create new session on "http://0.0.0.0:4723/wd/hub"
   Then I wait 5 seconds
   Then I expect element with xpath of "//android.widget.Button[2]" has value "My name"
```

_The example above will assert the text element value having xpath locator value of '//android.widget.Button[2]' on expected text value of My name'_

---

### Then I expect device keyboard is visible

_This keyword will assert device keyboard should be displayed_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
   When I create new session on "http://0.0.0.0:4723/wd/hub"
   Then I wait 5 seconds
   Then I expect device keyboard is visible
```

---

### Then I hide device keyboard

_This keyword will hide device keyboard if displayed_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
   When I create new session on "http://0.0.0.0:4723/wd/hub"
   Then I wait 5 seconds
   Then I hide device keyboard
```

---

### Then I shake the device

_This keyword will shake the device_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
   When I create new session on "http://0.0.0.0:4723/wd/hub"
   Then I wait 5 seconds
   Then I shake the device
```

---

### Then I make the app run in the background and make active after {number of seconds} seconds

_This keyword will run the app in the background in about '{number of seconds}' seconds, then will make it active afterwards'_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
   When I create new session on "http://0.0.0.0:4723/wd/hub"
   Then I wait 5 seconds
   Then I make the app run in the background and make active after "5" seconds
```

_The example above will run the app in the background in about 5 seconds, then will make it active afterwards'_

---

### Then I close the session

_This keyword close the app_

```gherkin
Scenario: My Sample Mobile Scenario
   Given that I set "Android" as platform with version of "10"
   Given that I set "emulator-5554" as device
   Given that app is located at "http://apksample.ueuo.com/apk/Kids.apk"
   When I create new session on "http://0.0.0.0:4723/wd/hub"
   Then I wait 5 seconds
   Then I close the session
```

---
