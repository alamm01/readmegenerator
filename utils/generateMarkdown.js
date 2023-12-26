// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
    let badge = '';
    switch(license) {
      case 'Apache License 2.0':
        badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
        break;
      case 'GNU General Public License v3.0':
        badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
        break;
      case 'MIT License':
        badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
        break;
      case 'None':
        badge = '';
        break;
    }
    // console.log(`Badge for ${license}: ${badge}`);
    return badge;
  }
  
  // Function to return the license link
  function renderLicenseLink(license) {
    let link = '';
    switch(license) {
      case 'Apache License 2.0':
        link = 'https://opensource.org/licenses/Apache-2.0';
        break;
      case 'GNU General Public License v3.0':
        link = 'https://www.gnu.org/licenses/gpl-3.0';
        break;
      case 'MIT License':
        link = 'https://opensource.org/licenses/MIT';
        break;
      case 'None':
        link = '';
        break;
    }
    return link;
  }
  
  // Function to return the license section of README
  function renderLicenseSection(license) {
    if(license === 'None') {
      return '';
    } else {
      return `This project is licensed under the ${license} - see the [LICENSE](${renderLicenseLink(license)}) file for details.`;
    }
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    // Add license badge near the top of the README
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseLink = renderLicenseLink(data.license);
    const licenseSection = renderLicenseSection(data.license);

    return `${licenseBadge}
    # Title ${data.title}

    ## Table of Contents
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Contributing](#contributing)
    5. [License](#license)
    6. [Questions](#questions)
  
    ## Description
    ${data.description}
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}
  
    ## Contributing
    ${data.contributing}
  
    ## License
    ${renderLicenseSection(data.license)}
  
    ## Testing
    ${data.testing}
  
    ## Questions
    For any questions, please reach out to me at:
  
    GitHub: [${data.questionusername}](https://github.com/${data.questionusername})
    Email: ${data.questionemail}
    `;
  }
  
  module.exports = generateMarkdown;
  