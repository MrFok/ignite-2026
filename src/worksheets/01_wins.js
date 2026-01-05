const React = require('react');
const { Document, View, Text, StyleSheet } = require('@react-pdf/renderer');
const { WorksheetPage } = require('../templates/index.js');
const { DotGridField, AsciiBorder } = require('../components/index.js');
const { TYPOGRAPHY, SPACING, COLORS } = require('../styles/theme.js');

const styles = StyleSheet.create({
  intro: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.gray,
    marginBottom: SPACING.md,
  },
  
  winBlock: {
    marginBottom: SPACING.md,
  },
  
  winTitle: {
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
});

const WinsWorksheet = () => {
  const e = React.createElement;
  
  return e(Document, null,
    e(WorksheetPage, { 
      number: '1.1', 
      title: 'Your Three Biggest Wins',
      subtitle: 'Session 1: 2025 — A Year In Review',
      section: 'DAY 1',
      pageNumber: 1,
      totalPages: 2
    },
      e(Text, { style: styles.intro }, 'Write 3–5 major wins, milestones, or achievements from 2025:'),
      
      e(View, { style: styles.winBlock },
        e(Text, { style: styles.winTitle }, 'Win #1:'),
        e(DotGridField, { label: 'What happened:', height: 24 }),
        e(DotGridField, { label: 'Why it mattered to me:', height: 24 }),
        e(DotGridField, { label: 'What I did that contributed to it:', height: 24 }),
        e(DotGridField, { label: 'Key conditions/people/tools that helped:', height: 24 })
      ),
      
      e(AsciiBorder, { type: 'thin' }),
      
      e(View, { style: styles.winBlock },
        e(Text, { style: styles.winTitle }, 'Win #2:'),
        e(DotGridField, { label: 'What happened:', height: 24 }),
        e(DotGridField, { label: 'Why it mattered to me:', height: 24 }),
        e(DotGridField, { label: 'What I did that contributed to it:', height: 24 }),
        e(DotGridField, { label: 'Key conditions/people/tools that helped:', height: 24 })
      )
    ),
    
    e(WorksheetPage, { 
      number: '1.1', 
      title: 'Your Three Biggest Wins',
      subtitle: 'continued',
      section: 'DAY 1',
      pageNumber: 2,
      totalPages: 2
    },
      e(View, { style: styles.winBlock },
        e(Text, { style: styles.winTitle }, 'Win #3:'),
        e(DotGridField, { label: 'What happened:', height: 28 }),
        e(DotGridField, { label: 'Why it mattered to me:', height: 28 }),
        e(DotGridField, { label: 'What I did that contributed to it:', height: 28 }),
        e(DotGridField, { label: 'Key conditions/people/tools that helped:', height: 28 })
      )
    )
  );
};

module.exports = { default: WinsWorksheet };
