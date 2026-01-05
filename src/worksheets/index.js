// All worksheet components
export { default as WinsWorksheet } from './01_wins.js';
export { default as ChallengesWorksheet } from './02_challenges.js';
export { default as WhatWorkedWorksheet } from './03_what_worked.js';
export { default as AnnualThemeWorksheet } from './04_annual_theme.js';
export { default as QuarterlyQuestsWorksheet } from './05_quarterly_quests.js';
export { default as CoreThemesWorksheet } from './06_core_themes.js';
export { default as VisionAreasWorksheet } from './07_vision_areas.js';
export { default as CelebrationWorksheet } from './08_celebration.js';
export { default as VisionBoardWorksheet } from './09_vision_board.js';
export { default as DopamineHabitsWorksheet } from './10_dopamine_habits.js';
export { default as DopamineAuditWorksheet } from './11_dopamine_audit.js';
export { default as DoseFrameworkWorksheet } from './12_dose_framework.js';
export { default as DopamineIntentionWorksheet } from './13_dopamine_intention.js';
export { default as Day1CheckpointWorksheet } from './14_day1_checkpoint.js';
export { default as ActionIntroWorksheet } from './15_action_intro.js';
export { default as TinyExperimentsWorksheet } from './16_tiny_experiments.js';
export { default as LimitingBeliefsWorksheet } from './17_limiting_beliefs.js';
export { default as ThreePowersWorksheet } from './18_three_powers.js';
export { default as LifeOSWorksheet } from './19_lifeos_structure.js';
export { default as WeeklyRhythmWorksheet } from './20_weekly_rhythm.js';
export { default as ReviewsWorksheet } from './21_reviews.js';
export { default as OperatingSystemWorksheet } from './22_operating_system.js';
export { default as FirstWeekWorksheet } from './23_first_week.js';
export { default as CompletionWorksheet } from './24_completion.js';

// Worksheet manifest for batch generation
export const worksheets = [
  { name: '01_wins', component: 'WinsWorksheet', title: 'Your Three Biggest Wins' },
  { name: '02_challenges', component: 'ChallengesWorksheet', title: 'Challenges & Lessons' },
  { name: '03_what_worked', component: 'WhatWorkedWorksheet', title: 'What Worked vs What Didnt' },
  { name: '04_annual_theme', component: 'AnnualThemeWorksheet', title: 'Annual Theme' },
  { name: '05_quarterly_quests', component: 'QuarterlyQuestsWorksheet', title: 'Quarterly Quests' },
  { name: '06_core_themes', component: 'CoreThemesWorksheet', title: 'Core Themes' },
  { name: '07_vision_areas', component: 'VisionAreasWorksheet', title: 'Vision Across Life Areas' },
  { name: '08_celebration', component: 'CelebrationWorksheet', title: '12-Month Celebration' },
  { name: '09_vision_board', component: 'VisionBoardWorksheet', title: 'Vision Board' },
  { name: '10_dopamine_habits', component: 'DopamineHabitsWorksheet', title: 'Dopamine Habits' },
  { name: '11_dopamine_audit', component: 'DopamineAuditWorksheet', title: 'Dopamine Audit' },
  { name: '12_dose_framework', component: 'DoseFrameworkWorksheet', title: 'DOSE Framework' },
  { name: '13_dopamine_intention', component: 'DopamineIntentionWorksheet', title: 'Dopamine Intention' },
  { name: '14_day1_checkpoint', component: 'Day1CheckpointWorksheet', title: 'Day 1 Checkpoint' },
  { name: '15_action_intro', component: 'ActionIntroWorksheet', title: 'Action Pillar' },
  { name: '16_tiny_experiments', component: 'TinyExperimentsWorksheet', title: 'Tiny Experiments' },
  { name: '17_limiting_beliefs', component: 'LimitingBeliefsWorksheet', title: 'Limiting Beliefs' },
  { name: '18_three_powers', component: 'ThreePowersWorksheet', title: 'Three Powers of Belief' },
  { name: '19_lifeos_structure', component: 'LifeOSWorksheet', title: 'LifeOS Structure' },
  { name: '20_weekly_rhythm', component: 'WeeklyRhythmWorksheet', title: 'Weekly Rhythm' },
  { name: '21_reviews', component: 'ReviewsWorksheet', title: 'Monthly & Quarterly Reviews' },
  { name: '22_operating_system', component: 'OperatingSystemWorksheet', title: 'One-Page Operating System' },
  { name: '23_first_week', component: 'FirstWeekWorksheet', title: 'First Week Action Plan' },
  { name: '24_completion', component: 'CompletionWorksheet', title: 'Workbook Completion' },
];
