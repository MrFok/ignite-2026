import React from 'react';
import { Document, View, Text, StyleSheet } from '@react-pdf/renderer';
import { WorksheetPage } from '../templates/index.js';
import { DotGridField, AsciiBorder, BulletList } from '../components/index.js';
import { TYPOGRAPHY, SPACING, COLORS } from '../styles/theme.js';

const styles = StyleSheet.create({
  intro: {
    fontSize: TYPOGRAPHY.sizes.sm,
    marginBottom: SPACING.md,
  },
  
  listTitle: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
  
  listItem: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.gray,
    marginBottom: SPACING.xs,
    paddingLeft: SPACING.sm,
  },
});

const VisionBoardWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="2.4" 
      title="Your Vision Board"
      subtitle="Optional but Powerful"
      section="DAY 1"
      pageNumber={1}
      totalPages={1}
    >
      <Text style={styles.intro}>
        Create a visual board (digital or physical) with:
      </Text>
      
      <Text style={styles.listItem}>- Images, quotes, or words representing your 3 themes</Text>
      <Text style={styles.listItem}>- Visual representations of your top 2-3 goals per life area</Text>
      <Text style={styles.listItem}>- Symbols for your 4 quarterly quests</Text>
      <Text style={styles.listItem}>- Colors or designs that energize you</Text>
      
      <AsciiBorder type="thick" />
      
      <DotGridField 
        label="What images/words/visuals will you include?" 
        height={110}
      />
    </WorksheetPage>
  </Document>
);

export default VisionBoardWorksheet;
