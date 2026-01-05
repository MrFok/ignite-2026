import React from 'react';
import { Document, View, Text, StyleSheet } from '@react-pdf/renderer';
import { WorksheetPage } from '../templates/index.js';
import { DotGridField, AsciiBorder } from '../components/index.js';
import { TYPOGRAPHY, SPACING, COLORS } from '../styles/theme.js';

const styles = StyleSheet.create({
  intro: {
    fontSize: TYPOGRAPHY.sizes.sm,
    marginBottom: SPACING.sm,
  },
  
  framework: {
    fontSize: TYPOGRAPHY.sizes.xs,
    marginBottom: SPACING.xs,
    paddingLeft: SPACING.sm,
  },
  
  shift: {
    marginBottom: SPACING.md,
  },
  
  shiftTitle: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
    textTransform: 'uppercase',
  },
});

const DoseFrameworkWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="3.3" 
      title="The DOSE Lens"
      subtitle="Session 3: Escaping Dopamine Land — The DOSE Framework"
      section="DAY 1"
      pageNumber={1}
      totalPages={2}
    >
      <Text style={styles.intro}>
        A healthy dopamine system is supported by other brain chemicals too, often summarized as DOSE (dopamine plus oxytocin, serotonin, endorphins).
      </Text>
      
      <Text style={styles.intro}>
        For each life area, identify one small shift away from high-stim dopamine to something slower but more meaningful:
      </Text>
      
      <AsciiBorder type="thick" />
      
      <View style={styles.shift}>
        <Text style={styles.shiftTitle}>Health & Energy Shift:</Text>
        <DotGridField label="High-stim habit:" height={20} />
        <DotGridField label="Alternative that leaves me feeling calmer or genuinely better:" height={20} />
      </View>
      
      <View style={styles.shift}>
        <Text style={styles.shiftTitle}>Relationships Shift:</Text>
        <DotGridField label="High-stim habit:" height={20} />
        <DotGridField label="Alternative that deepens connection:" height={20} />
      </View>
    </WorksheetPage>
    
    <WorksheetPage 
      number="3.3" 
      title="The DOSE Lens"
      subtitle="continued"
      section="DAY 1"
      pageNumber={2}
      totalPages={2}
    >
      <View style={styles.shift}>
        <Text style={styles.shiftTitle}>Work / Creative Shift:</Text>
        <DotGridField label="High-stim habit:" height={24} />
        <DotGridField label="Alternative that helps focus or deep work:" height={24} />
      </View>
      
      <AsciiBorder type="dashed" />
      
      <View style={styles.shift}>
        <Text style={styles.shiftTitle}>Learning / Growth Shift:</Text>
        <DotGridField label="High-stim habit:" height={24} />
        <DotGridField label="Alternative that builds real skill/knowledge:" height={24} />
      </View>
    </WorksheetPage>
  </Document>
);

export default DoseFrameworkWorksheet;
