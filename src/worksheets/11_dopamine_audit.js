import React from 'react';
import { Document, View, Text, StyleSheet } from '@react-pdf/renderer';
import { WorksheetPage } from '../templates/index.js';
import { WritableTable, AsciiBorder } from '../components/index.js';
import { TYPOGRAPHY, SPACING, COLORS } from '../styles/theme.js';

const styles = StyleSheet.create({
  intro: {
    fontSize: TYPOGRAPHY.sizes.sm,
    marginBottom: SPACING.md,
  },
});

const DopamineAuditWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="3.2" 
      title="Dopamine Audit"
      subtitle="Session 3: Escaping Dopamine Land"
      section="DAY 1"
      pageNumber={1}
      totalPages={1}
    >
      <Text style={styles.intro}>
        For each high-stimulation source, ask:
      </Text>
      
      <WritableTable 
        headers={['SOURCE', 'TIME/DAY', 'HOW I FEEL AFTER', 'COST TO ME']}
        rows={6}
        columnWidths={['25%', '18%', '30%', '27%']}
      />
    </WorksheetPage>
  </Document>
);

export default DopamineAuditWorksheet;
