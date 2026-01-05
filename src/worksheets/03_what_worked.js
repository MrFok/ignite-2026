import React from 'react';
import { Document, View, Text, StyleSheet } from '@react-pdf/renderer';
import { WorksheetPage } from '../templates/index.js';
import { DotGridField, AsciiBorder, BulletList, WritableTable, SectionBlock } from '../components/index.js';
import { TYPOGRAPHY, SPACING, COLORS } from '../styles/theme.js';

const styles = StyleSheet.create({
  section: {
    marginBottom: SPACING.md,
  },
  
  label: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
});

const WhatWorkedWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="1.3" 
      title="What Worked vs. What Didn't"
      subtitle="Session 1: 2025 - A Year In Review"
      section="DAY 1"
      pageNumber={1}
      totalPages={1}
    >
      <View style={styles.section}>
        <Text style={styles.label}>Habits, routines, or systems that clearly WORKED:</Text>
        <BulletList writable={true} emptyLines={4} bulletChar="-" />
      </View>
      
      <AsciiBorder type="thin" />
      
      <View style={styles.section}>
        <Text style={styles.label}>Habits, routines, or systems that DIDN'T WORK or drained energy:</Text>
        <BulletList writable={true} emptyLines={4} bulletChar="-" />
      </View>
      
      <AsciiBorder type="thick" />
      
      <View style={styles.section}>
        <Text style={styles.label}>Based on the above, I want to:</Text>
        <WritableTable 
          headers={['KEEP', 'IMPROVE', 'DROP']}
          rows={4}
          columnWidths={['33%', '34%', '33%']}
        />
      </View>
    </WorksheetPage>
  </Document>
);

export default WhatWorkedWorksheet;
