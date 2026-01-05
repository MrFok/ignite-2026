import React from 'react';
import { Document, View, Text, StyleSheet } from '@react-pdf/renderer';
import { WorksheetPage } from '../templates/index.js';
import { DotGridField, AsciiBorder } from '../components/index.js';
import { TYPOGRAPHY, SPACING, COLORS } from '../styles/theme.js';

const styles = StyleSheet.create({
  prompt: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.gray,
    marginBottom: SPACING.md,
    
    lineHeight: 1.5,
  },
  
  instructions: {
    fontSize: TYPOGRAPHY.sizes.sm,
    marginBottom: SPACING.md,
  },
});

const CelebrationWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="2.3" 
      title="12-Month Celebration"
      subtitle="Session 2: Vision Boarding"
      section="DAY 1"
      pageNumber={1}
      totalPages={1}
    >
      <Text style={styles.prompt}>
        Close your eyes. Imagine it's exactly 12 months from today. 
        You're celebrating an amazing year with someone you trust.
      </Text>
      
      <Text style={styles.instructions}>
        Free write 2-3 paragraphs: What are you celebrating? Where are you? 
        What feels different now compared to today?
      </Text>
      
      <DotGridField height={140} />
    </WorksheetPage>
  </Document>
);

export default CelebrationWorksheet;
