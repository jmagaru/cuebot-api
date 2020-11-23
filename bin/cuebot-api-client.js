/*
 * Copyright 2020 Jonathan Magaru <jonathan.magaru.code@gmail.com>
 * Licensed under the MIT license. See LICENSE.
 *
 * CUEBOT-API CucumberJS Wrapper
 */

const path = require("path");
const fs = require("fs");
const colors = require("chalk");

module.exports.default = ({ specs, tags, formatter }) => {
  // Recreating screenshot folders
  if (!fs.existsSync("reports/snapshots")) {
    fs.mkdirSync("reports/snapshots", { recursive: true });
  }

  // writeFile report json file default
  if (!fs.existsSync("reports/cuebot-api-report.json")) {
    fs.writeFile("reports/cuebot-api-report.json", "[]", function (err) {
      if (err) throw err;
    });
  }

  // writeFile report html file default
  if (!fs.existsSync("reports/cuebot-api-report.html")) {
    fs.writeFile("reports/cuebot-api-report.html", "[]", function (err) {
      if (err) throw err;
    });
  }

  //Defining Library folder

  let cuebotAPIPath = path.resolve(__dirname, "../lib/");

  // Catenate Client options
  let clientOptions = ["", ""];
  if (specs) clientOptions = clientOptions.concat([specs]);

  clientOptions = clientOptions.concat([
    `--require=${cuebotAPIPath}/steps/api/test-steps.js`,
    `--format=json:reports/cuebot-api-report.json`,
    `--format=${cuebotAPIPath}/formatter/cuebot-formatter.js`,
    `--require=${cuebotAPIPath}/api/cuebot-phone.js`
  ]);

  if (tags) clientOptions = clientOptions.concat(["--tags", `${tags}`]);
  if (formatter)
    clientOptions = clientOptions.concat([`--format=${formatter}`]);

  let client = new (require("cucumber").Cli)({
    argv: clientOptions,
    cwd: process.cwd(),
    stdout: process.stdout,
  });

  // Returning Exit Code
  return new Promise(function (resolve, reject) {
    try {
      return client
        .run()
        .then((result) => resolve(result.success === true ? 0 : 1));
    } catch (e) {
      return reject(e);
    }
  });
};
