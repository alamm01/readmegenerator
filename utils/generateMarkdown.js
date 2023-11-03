// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## usage
${data.usage}

## license
${data.license}

## contributing
${data.contributing}

## Testing
${data.testing}

## Question
${data.questionusername}
${data.questionemail}

`;
}

module.exports = generateMarkdown;
