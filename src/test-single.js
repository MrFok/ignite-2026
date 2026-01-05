const React = require('react');
const { renderToFile } = require('@react-pdf/renderer');
const path = require('path');
const fs = require('fs');

const WinsWorksheet = require('./worksheets/01_wins.js').default;

const outputDir = path.join(__dirname, '../output/pdfs');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Testing single worksheet generation...');

async function test() {
  try {
    const outputPath = path.join(outputDir, '01_wins.pdf');
    await renderToFile(React.createElement(WinsWorksheet), outputPath);
    console.log('SUCCESS: PDF generated at', outputPath);
  } catch (error) {
    console.error('ERROR:', error.message);
    console.error(error.stack);
  }
}

test();
