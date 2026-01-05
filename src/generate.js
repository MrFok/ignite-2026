const React = require('react');
const { renderToFile } = require('@react-pdf/renderer');
const path = require('path');
const fs = require('fs');

// Import all worksheets
const TitlePage = require('./worksheets/00_title.js').default;
const WinsWorksheet = require('./worksheets/01_wins.js').default;
const ChallengesWorksheet = require('./worksheets/02_challenges.js').default;
const WhatWorkedWorksheet = require('./worksheets/03_what_worked.js').default;
const AnnualThemeWorksheet = require('./worksheets/04_annual_theme.js').default;
const QuarterlyQuestsWorksheet = require('./worksheets/05_quarterly_quests.js').default;
const CoreThemesWorksheet = require('./worksheets/06_core_themes.js').default;
const VisionAreasWorksheet = require('./worksheets/07_vision_areas.js').default;
const CelebrationWorksheet = require('./worksheets/08_celebration.js').default;
const VisionBoardWorksheet = require('./worksheets/09_vision_board.js').default;
const DopamineHabitsWorksheet = require('./worksheets/10_dopamine_habits.js').default;
const DopamineAuditWorksheet = require('./worksheets/11_dopamine_audit.js').default;
const DoseFrameworkWorksheet = require('./worksheets/12_dose_framework.js').default;
const DopamineIntentionWorksheet = require('./worksheets/13_dopamine_intention.js').default;
const Day1CheckpointWorksheet = require('./worksheets/14_day1_checkpoint.js').default;
const ActionIntroWorksheet = require('./worksheets/15_action_intro.js').default;
const TinyExperimentsWorksheet = require('./worksheets/16_tiny_experiments.js').default;
const LimitingBeliefsWorksheet = require('./worksheets/17_limiting_beliefs.js').default;
const ThreePowersWorksheet = require('./worksheets/18_three_powers.js').default;
const LifeOSWorksheet = require('./worksheets/19_lifeos_structure.js').default;
const WeeklyRhythmWorksheet = require('./worksheets/20_weekly_rhythm.js').default;
const ReviewsWorksheet = require('./worksheets/21_reviews.js').default;
const OperatingSystemWorksheet = require('./worksheets/22_operating_system.js').default;
const FirstWeekWorksheet = require('./worksheets/23_first_week.js').default;
const CompletionWorksheet = require('./worksheets/24_completion.js').default;

// Worksheet definitions
const worksheets = [
  { name: '00_title', Component: TitlePage, title: 'Title Page' },
  { name: '01_wins', Component: WinsWorksheet, title: 'Your Three Biggest Wins' },
  { name: '02_challenges', Component: ChallengesWorksheet, title: 'Challenges & Lessons' },
  { name: '03_what_worked', Component: WhatWorkedWorksheet, title: 'What Worked vs What Didnt' },
  { name: '04_annual_theme', Component: AnnualThemeWorksheet, title: 'Annual Theme' },
  { name: '05_quarterly_quests', Component: QuarterlyQuestsWorksheet, title: 'Quarterly Quests' },
  { name: '06_core_themes', Component: CoreThemesWorksheet, title: 'Core Themes' },
  { name: '07_vision_areas', Component: VisionAreasWorksheet, title: 'Vision Across Life Areas' },
  { name: '08_celebration', Component: CelebrationWorksheet, title: '12-Month Celebration' },
  { name: '09_vision_board', Component: VisionBoardWorksheet, title: 'Vision Board' },
  { name: '10_dopamine_habits', Component: DopamineHabitsWorksheet, title: 'Dopamine Habits' },
  { name: '11_dopamine_audit', Component: DopamineAuditWorksheet, title: 'Dopamine Audit' },
  { name: '12_dose_framework', Component: DoseFrameworkWorksheet, title: 'DOSE Framework' },
  { name: '13_dopamine_intention', Component: DopamineIntentionWorksheet, title: 'Dopamine Intention' },
  { name: '14_day1_checkpoint', Component: Day1CheckpointWorksheet, title: 'Day 1 Checkpoint' },
  { name: '15_action_intro', Component: ActionIntroWorksheet, title: 'Action Pillar' },
  { name: '16_tiny_experiments', Component: TinyExperimentsWorksheet, title: 'Tiny Experiments' },
  { name: '17_limiting_beliefs', Component: LimitingBeliefsWorksheet, title: 'Limiting Beliefs' },
  { name: '18_three_powers', Component: ThreePowersWorksheet, title: 'Three Powers of Belief' },
  { name: '19_lifeos_structure', Component: LifeOSWorksheet, title: 'LifeOS Structure' },
  { name: '20_weekly_rhythm', Component: WeeklyRhythmWorksheet, title: 'Weekly Rhythm' },
  { name: '21_reviews', Component: ReviewsWorksheet, title: 'Monthly & Quarterly Reviews' },
  { name: '22_operating_system', Component: OperatingSystemWorksheet, title: 'One-Page Operating System' },
  { name: '23_first_week', Component: FirstWeekWorksheet, title: 'First Week Action Plan' },
  { name: '24_completion', Component: CompletionWorksheet, title: 'Workbook Completion' },
];

const outputDir = path.join(__dirname, '../output/pdfs');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('');
console.log('='.repeat(60));
console.log('  IGNITE 2026 WORKSHEET GENERATOR');
console.log('  Design Engineering Style');
console.log('='.repeat(60));
console.log('');
console.log(`Output directory: ${outputDir}`);
console.log(`Generating ${worksheets.length} worksheets...`);
console.log('');

async function generateWorksheet(worksheet, index) {
  const { name, Component, title } = worksheet;
  const outputPath = path.join(outputDir, `${name}.pdf`);
  
  const progress = `[${String(index + 1).padStart(2, '0')}/${worksheets.length}]`;
  
  try {
    await renderToFile(React.createElement(Component), outputPath);
    console.log(`${progress} OK  ${name}.pdf - ${title}`);
    return { success: true, name };
  } catch (error) {
    console.error(`${progress} ERR ${name}.pdf - ${error.message}`);
    return { success: false, name, error: error.message };
  }
}

async function generateAll() {
  const startTime = Date.now();
  const results = [];
  
  for (let i = 0; i < worksheets.length; i++) {
    const result = await generateWorksheet(worksheets[i], i);
    results.push(result);
  }
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(1);
  
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log('');
  console.log('-'.repeat(60));
  console.log(`Completed in ${duration}s`);
  console.log(`Success: ${successful} | Failed: ${failed}`);
  console.log('-'.repeat(60));
  
  if (failed > 0) {
    console.log('');
    console.log('Failed worksheets:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`  - ${r.name}: ${r.error}`);
    });
  }
  
  console.log('');
  console.log(`PDFs saved to: ${outputDir}`);
  console.log('');
}

generateAll().catch(console.error);
