// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // console.log('this is bad');
  console.log(license);

  let badge = '';
    if(license === 'Apache 2.0') {
        badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    } else if (license === 'Boost Software License 1.0') {
        badge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
    } else if (license ==='Eclipse Publice License 1.0') {
        badge = `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`
    } else if (license === 'GNU GPLv3') {
        badge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    } else if (license === 'GNU AGPLv3') {
        badge = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`
    } else if (license === 'MIT') {
        badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license === 'Unlicense') {
        badge = `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
    } else {
      badge = ''
    } 
    console.log(badge);
    return badge;
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let LicenseLink = '';
    if(license === 'Apache') {
        LicenseLink = `https://opensource.org/licenses/Apache-2.0`
    } else if (license === 'BootSoftWare') {
        LicenseLink = `https://www.boost.org/LICENSE_1_0.txt`
    } else if (license ==='Eclipse') {
        LicenseLink = `https://opensource.org/licenses/EPL-1.0`
    } else if (license === 'GNUGPLv3') {
        LicenseLink = `https://www.gnu.org/licenses/gpl-3.0`
    } else if (license === 'GNUAGPLv3') {
        LicenseLink = `https://www.gnu.org/licenses/agpl-3.0`
    } else if (license === 'MIT') {
        LicenseLink = `https://opensource.org/licenses/MIT`
    } else if (license === 'Unlicense') {
        LicenseLink = `http://unlicense.org/`
    } else {
        LicenseLink = ''
    }
    return LicenseLink;
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = 
    `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.Title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  # Description
  ${data.Description}

  # Table of Contents
  * [Installations](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  
  # Installation
  The following dependencies must be installed to run the application

  # Usage
  In order to use this App, ${data.Usage}

  # Contributors: 
  ${data.Contributing}

  # Tests
  The Following is needed to run tests on application: ${data.Tests}

  # License
  This project is license under ${data.license}
  `
}

module.exports = generateMarkdown;

