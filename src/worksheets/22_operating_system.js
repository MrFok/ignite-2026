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
  
  osTitle: {
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: SPACING.md,
    borderWidth: 2,
    borderColor: COLORS.black,
    padding: SPACING.sm,
  },
  
  section: {
    marginBottom: SPACING.sm,
  },
  
  sectionLabel: {
    fontSize: TYPOGRAPHY.sizes.xs,
    fontWeight: 'bold',
    marginBottom: 2,
  },
});

const OperatingSystemWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="8.1" 
      title="One-Page Operating System"
      subtitle="Session 8: Your Vision, Locked In — The Full Picture"
      section="DAY 2"
      pageNumber={1}
      totalPages={1}
    >
      <Text style={styles.objective}>
        Write this on one page you can see regularly (home screen, desk, Notion):
      </Text>
      
      <Text style={styles.osTitle}>MY 2026 OPERATING SYSTEM</Text>
      
      <DotGridField label="Annual Theme:" height={16} />
      
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Quarterly Quests:</Text>
        <DotGridField label="Q1:" height={12} />
        <DotGridField label="Q2:" height={12} />
        <DotGridField label="Q3:" height={12} />
        <DotGridField label="Q4:" height={12} />
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>My 3 Core Themes:</Text>
        <BulletList writable={true} emptyLines={3} bulletChar="1." />
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>My 3 Keystone Habits:</Text>
        <BulletList writable={true} emptyLines={3} bulletChar="1." />
      </View>
      
      <DotGridField label="Weekly Rhythm: [Planning Day/Time]" height={12} />
      
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>My Key DOSE Shifts:</Text>
        <BulletList writable={true} emptyLines={2} bulletChar="-" />
      </View>
      
      <DotGridField label="Monthly Review Date:" height={12} />
    </WorksheetPage>
  </Document>
);

export default OperatingSystemWorksheet;
