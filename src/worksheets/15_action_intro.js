import React from 'react';
import { Document, View, Text, StyleSheet } from '@react-pdf/renderer';
import { WorksheetPage } from '../templates/index.js';
import { DotGridField, AsciiBorder } from '../components/index.js';
import { TYPOGRAPHY, SPACING, COLORS } from '../styles/theme.js';

const styles = StyleSheet.create({
  objective: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.gray,
    marginBottom: SPACING.md,
  },
  
  section: {
    marginBottom: SPACING.md,
  },
});

const ActionIntroWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="4" 
      title="The Action Pillar"
      subtitle="Session 4: Introduction"
      section="DAY 2"
      pageNumber={1}
      totalPages={1}
    >
      <Text style={styles.objective}>
        Objective: Understand why productivity is less about doing more and more about building systems that support sustainable action, consistent with Ali’s “success system” framing.
      </Text>
      
      <View style={styles.section}>
        <DotGridField 
          label='In one sentence, what "productivity" means for me in 2026:' 
          height={48}
        />
      </View>
      
      <AsciiBorder type="thick" />
      
      <View style={styles.section}>
        <DotGridField 
          label="What I want my systems to do for me (not the other way around):" 
          height={80}
        />
      </View>
    </WorksheetPage>
  </Document>
);

export default ActionIntroWorksheet;
