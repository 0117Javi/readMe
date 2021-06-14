// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
      break;
    // case "Mozilla Public License 2.0":
    //   return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    //   break;
    // case "Apache License 2.0":
    //   return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    //   break;
    // case "Boost Software License 1.0":
    //   return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    //   break;
    // case "No license":
    //   return "";
    //   break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return "[![License: MIT]](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0]](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Apache License 2.0":
      return "[![License]](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost Software License 1.0":
      return "[![License]](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "No license":
      return "";
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.License)}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Credits](#contributes)

* [License](#license)

* [Tests](#tests)

* [Questions](#questions)

## Description ${data.Description}

      * Installation ${data.Installation} 

      * Usage ${data.Usage} 

      * Contribution ${data.Contribution} 

      * Test ${data.Test} 

      * Questions ${data.Github} 

## ${data.Email}  

## License 

${renderLicenseBadge(data.License)}
${renderLicenseLink(data.License)}

`;
}

module.exports = generateMarkdown;
