// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
\n
\t ### ${data.author}
\n
https://img.shields.io/badge/-TIME%20SAVER!-brightgreen
## DESCRIPTION
${data.description}
\n
## TABLE OF CONTENTS
1. ${data.contents}
\n
## INSTALLATION
${data.installation}
\n
## USAGE
${data.usage}
\n
## LICENSES
* ${data.licenses}
\n
## CONTRIBUTORS
${data.contributors}
\n
## TESTS
${data.tests}
\n
## QUESTIONS
${data.questions}    
  `;
}
module.exports = generateMarkdown;
