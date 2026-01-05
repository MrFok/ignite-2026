# IGNITE 2026 Workbook Generator

*Disclaimer: This notebook is not affiliated with Ali Abdaal or his team.*

A PDF worksheet generator for a workbook inspired by Ali Abdaal's SPARK 2026 Productivity Summit, created for those who missed the seminar.

## Overview

Dr. Ali lives in Hong Kong (我愛香港!!!), and I could not be bothered to wake up at 5AM PST to attend the seminar (got kids, sorry). So, I decided to go through his content myself alongside Perplexity, and compiled the seminar content into PDF worksheets that I could work on!

See the [Credits](#credits) section for more details

### What's included

- **25 Individual Worksheets** - Each section as a separate PDF
- **Combined Workbook** - Single PDF with all worksheets

You can find them in the output/pdfs folder!

## Technical Voodoo 🪄
I decided to use a React-based approach to generate the PDFs I decided to use a React-based approach to generate the PDFs mainly for the sake of controlling the styling and layout.

Using **`@react-pdf/renderer`** for rendering the PDFs and **`pdf-lib`** for combining the individual PDFs into a single workbook.


### How to install

- Node.js (v14 or higher)
- npm or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MrFok/ignite-2026.git
cd worksheet-generator
```

2. Install dependencies:
```bash
npm install
```

### Usage

#### Generate Individual Worksheets
Generate all 25 individual PDF worksheets:

```bash
npm run generate
```

This will:
1. Compile the source files using Babel
2. Generate all worksheets to `output/pdfs/`
3. Each worksheet will be named `00_title.pdf`, `01_wins.pdf`, etc.

#### Combine into Single PDF

After generating individual worksheets, combine them into a single workbook:

```bash
npm run combine
```

This creates `output/pdfs/IGNITE_2026_Workbook_Combined.pdf` with:
- Title page (no page number)
- All 25 worksheets in order
- Continuous page numbering (1/51, 2/51, etc.)

#### Test Single Worksheet

Test a single worksheet generation:

```bash
npm run build
node dist/test-single.js
```

## Project Structure

```
worksheet-generator/
├── src/
│   ├── components/          # Reusable PDF components
│   │   ├── DotGridField.js  # Input fields (no dots, just containers)
│   │   ├── TerminalHeader.js
│   │   ├── PageFooter.js
│   │   └── ...
│   ├── templates/           # Page layout templates
│   │   └── WorksheetPage.js
│   ├── worksheets/          # Individual worksheet definitions
│   │   ├── 00_title.js     # Title page
│   │   ├── 01_wins.js
│   │   └── ...
│   ├── styles/
│   │   └── theme.js        # Theme constants and font registration
│   ├── generate.js          # Batch generator script
│   └── combine.js           # PDF combiner script
├── assets/
│   └── fonts/              # Font files
├── output/
│   └── pdfs/               # Generated PDFs (gitignored)
├── dist/                   # Compiled files (gitignored)
└── package.json
```

## Technical Details

- **PDF Engine**: `@react-pdf/renderer` v4.3.0
- **PDF Combination**: `pdf-lib` v1.17.1
- **Build Tool**: Babel (ES6+ and JSX transpilation)

## Credits

This workbook is an independent, unofficial recreation of the core experience of Ali Abdaal’s SPARK 2025/2026 Productivity Summits, intended for personal use.

The structure, session titles, and themes (reflection, vision boarding, dopamine/focus, experiments, belief work, and LifeOS) are based on publicly available information about the SPARK events (including the official summit page, announcement posts, and follow-up reflections), as well as Ali’s broader writing on annual reflection, goal-setting, and personal success systems. You can find Ali's official website for the summit [here](https://aliabdaal.com/spark-2026/).

No proprietary worksheets, paid VIP materials, or internal resources were accessed or reproduced. All specific prompts, tables, and layouts in this repository are original adaptations designed to approximate the style and intent of the events using only publicly documented concepts and attendee takeaways.

Font: GT Pressura Mono by Dominik Huber & Moire (From the Online Webfonts website)

## Contributing

Feel free to submit issues or pull requests on the content of the worksheets!
