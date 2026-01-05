import React from 'react';
import { Document, View, Text, StyleSheet } from '@react-pdf/renderer';
import { WorksheetPage } from '../templates/index.js';
import { DotGridField, AsciiBorder, BulletList } from '../components/index.js';
import { TYPOGRAPHY, SPACING, COLORS } from '../styles/theme.js';

const styles = StyleSheet.create({
  objective: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.gray,
    marginBottom: SPACING.md,
    
  },
  
  label: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
  
  sublabel: {
    fontSize: TYPOGRAPHY.sizes.xs,
    color: COLORS.gray,
    marginBottom: SPACING.xs,
  },
  
  section: {
    marginBottom: SPACING.md,
  },
});

const DopamineHabitsWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="3.1" 
      title="Your Current Dopamine Habits"
      subtitle="Session 3: Escaping Dopamine Land"
      section="DAY 1"
      pageNumber={1}
      totalPages={1}
    >
      <Text style={styles.objective}>
        Objective: Understand dopamine overload and use the DOSE tools to feel clearer, calmer, and genuinely great.
      </Text>
      
      <Text style={styles.label}>
        Where do you currently get most of your dopamine? (Be honest - this isn't judgment.)
      </Text>
      
      <View style={styles.section}>
        <Text style={styles.label}>High-stimulation sources</Text>
        <Text style={styles.sublabel}>(feels urgent, addictive, brief pleasure)</Text>
        <BulletList writable={true} emptyLines={4} bulletChar="-" />
      </View>
      
      <AsciiBorder type="thick" />
      
      <View style={styles.section}>
        <Text style={styles.label}>Lower-stimulation but meaningful sources</Text>
        <Text style={styles.sublabel}>(deeper satisfaction, takes effort)</Text>
        <BulletList writable={true} emptyLines={4} bulletChar="-" />
      </View>
    </WorksheetPage>
  </Document>
);

export default DopamineHabitsWorksheet;
