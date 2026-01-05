import React from 'react';
import { Document, View, Text, StyleSheet } from '@react-pdf/renderer';
import { WorksheetPage } from '../templates/index.js';
import { DotGridField, AsciiBorder, BulletList } from '../components/index.js';
import { TYPOGRAPHY, SPACING, COLORS } from '../styles/theme.js';

const styles = StyleSheet.create({
  label: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
  
  sublabel: {
    fontSize: TYPOGRAPHY.sizes.xs,
    color: COLORS.gray,
    marginBottom: SPACING.sm,
  },
  
  section: {
    marginBottom: SPACING.md,
  },
  
  commitLabel: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    marginBottom: SPACING.sm,
  },
});

const DopamineIntentionWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="3.4" 
      title="Your 2026 Dopamine Intention"
      subtitle="Session 3: Escaping Dopamine Land"
      section="DAY 1"
      pageNumber={1}
      totalPages={1}
    >
      <View style={styles.section}>
        <Text style={styles.label}>In 2026, I want to feel:</Text>
        <Text style={styles.sublabel}>(Choose 1-3 words: calm, focused, energized, purposeful, joyful, clear, etc.)</Text>
        <DotGridField height={32} />
      </View>
      
      <AsciiBorder type="thick" />
      
      <View style={styles.section}>
        <Text style={styles.commitLabel}>To feel this way, I commit to:</Text>
        <DotGridField label="1." height={28} />
        <DotGridField label="2." height={28} />
        <DotGridField label="3." height={28} />
      </View>
    </WorksheetPage>
  </Document>
);

export default DopamineIntentionWorksheet;
