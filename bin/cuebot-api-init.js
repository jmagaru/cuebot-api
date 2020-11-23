/*
 * Copyright 2020 Jonathan Magaru <jonathan.magaru.code@gmail.com>
 * Licensed under the MIT license. See LICENSE.
 *
 * Cuebot-API | Script Initialization with sample scripts
 */
const fs = require("fs");

module.exports.default = () => {
  // Initiate folder creation
  const featureLocation = "./features";
  const reportLocation = "./reports";

  process.stdout.write("Creating features folder...");
  if (!fs.existsSync(featureLocation)) {
    fs.mkdirSync(featureLocation);
    process.stdout.write("done.\n");
  } else {
    process.stdout.write("already exists.\n");
  }

  // Creating sample feature file
  process.stdout.write("Creating initial feature...");
  let feature_template =
    "@cuebot \nFeature: My Sample Feature\n" +
    "\tAs Automation engineer\n" +
    "\tI want to verify that all functionality are working as they should\n\n" +
    "\t@testmobile\n" +
    "\tScenario: My Sample Mobile Scenario\n"+
    "\t\tGiven that I set \"Android\" as platform with version of \"10\" \n"+
    "\t\tGiven that I set \"emulator-5554\" as device\n "+
    "\t\tGiven that app is located at \"http://apksample.ueuo.com/apk/Kids.apk\" \n"+
    "\t\tWhen I create new session on \"http://0.0.0.0:4723/wd/hub\" \n "+
    "\t\tThen I wait 5 seconds\n"+
    "\t\tThen I close the session\n\n"+
    "";

  fs.writeFileSync(featureLocation + "/sample.feature", feature_template);
  process.stdout.write("done.\n");
};
