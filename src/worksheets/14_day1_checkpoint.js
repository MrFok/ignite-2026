import React from 'react';
import { Document, View, Text, StyleSheet } from '@react-pdf/renderer';
import { WorksheetPage } from '../templates/index.js';
import { DotGridField, AsciiBorder } from '../components/index.js';
import { TYPOGRAPHY, SPACING, COLORS } from '../styles/theme.js';

const styles = StyleSheet.create({
  intro: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    marginBottom: SPACING.md,
  },
  
  question: {
    marginBottom: SPACING.md,
  },
});

const Day1CheckpointWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="CHK" 
      title="End of Day 1 Checkpoint"
      subtitle="Pause and reflect before Day 2"
      section="DAY 1"
      pageNumber={1}
      totalPages={1}
    >
      <Text style={styles.intro}>
        Before moving to Day 2, pause and answer:
      </Text>
      
      <View style={styles.question}>
        <DotGridField 
          label="What is ONE insight from today's reflection that surprised me?" 
          height={40}
        />
      </View>
      
      <AsciiBorder type="dashed" />
      
      <View style={styles.question}>
        <DotGridField 
          label="What is ONE vision that feels most exciting to pursue?" 
          height={40}
        />
      </View>
      
      <AsciiBorder type="dashed" />
      
      <View style={styles.question}>
        <DotGridField 
          label="What is ONE dopamine habit I'm ready to shift?" 
          height={40}
        />
      </View>
    </WorksheetPage>
  </Document>
);

export default Day1CheckpointWorksheet;
