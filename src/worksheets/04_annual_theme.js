const React = require('react');
const { Document, View, Text, StyleSheet } = require('@react-pdf/renderer');
const { WorksheetPage } = require('../templates/index.js');
const { DotGridField, AsciiBorder } = require('../components/index.js');
const { TYPOGRAPHY, SPACING, COLORS } = require('../styles/theme.js');

const styles = StyleSheet.create({
  objective: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.gray,
    marginBottom: SPACING.md,
    paddingLeft: SPACING.sm,
    borderLeftWidth: 2,
    borderLeftColor: COLORS.lightGray,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  
  examples: {
    fontSize: TYPOGRAPHY.sizes.xs,
    color: COLORS.gray,
    marginBottom: SPACING.md,
  },
  
  themeBox: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.black,
    padding: SPACING.md,
    marginBottom: SPACING.md,
  },
  
  themeLabel: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
});

const AnnualThemeWorksheet = () => {
  const e = React.createElement;
  
  return e(Document, null,
    e(WorksheetPage, { 
      number: '1.4', 
      title: 'Annual Theme',
      subtitle: 'Session 1.4: Annual Theme & Quarterly Quests',
      section: 'DAY 1',
      pageNumber: 1,
      totalPages: 1
    },
      e(Text, { style: styles.objective },
        'Objective: Choose a simple annual theme and translate it into 4 clear “quests” for the year, which Ali emphasizes in his yearly planning content.'
      ),
      
      e(Text, { style: styles.examples },
        'Examples: “Deep Work”, “Health First”, “Family & Focus”, “Ship More”, “Play & Presence”'
      ),
      
      e(View, { style: styles.themeBox },
        e(Text, { style: styles.themeLabel }, 'My 2026 Theme Is:'),
        e(DotGridField, { height: 40, showBorder: false })
      ),
      
      e(AsciiBorder, { type: 'thin' }),
      
      e(DotGridField, { 
        label: 'Why this theme matters to me this year:', 
        height: 80
      })
    )
  );
};

module.exports = { default: AnnualThemeWorksheet };
