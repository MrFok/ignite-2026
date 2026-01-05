import React from 'react';
import { Document, View, Text, StyleSheet } from '@react-pdf/renderer';
import { WorksheetPage } from '../templates/index.js';
import { DotGridField, AsciiBorder } from '../components/index.js';
import { TYPOGRAPHY, SPACING, COLORS } from '../styles/theme.js';

const styles = StyleSheet.create({
  title: {
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  
  question: {
    marginBottom: SPACING.md,
  },
  
  signature: {
    flexDirection: 'row',
    marginTop: SPACING.lg,
    justifyContent: 'space-between',
  },
  
  sigBlock: {
    width: '45%',
  },
  
  sigLabel: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
  
  sigLine: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black,
    height: 20,
  },
});

const CompletionWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="END" 
      title="End of IGNITE 2026 Workbook"
      subtitle="Final Reflections"
      section="COMPLETE"
      pageNumber={1}
      totalPages={1}
    >
      <Text style={styles.title}>CONGRATULATIONS!</Text>
      
      <View style={styles.question}>
        <DotGridField 
          label="What is the biggest shift in my mindset from this process?" 
          height={32}
        />
      </View>
      
      <View style={styles.question}>
        <DotGridField 
          label="What am I most excited to try in the next 30 days?" 
          height={32}
        />
      </View>
      
      <View style={styles.question}>
        <DotGridField 
          label="Who could I share this with to stay accountable?" 
          height={28}
        />
      </View>
      
      <View style={styles.question}>
        <DotGridField 
          label="What will I do if I get off track?" 
          height={28}
        />
      </View>
      
      <View style={styles.signature}>
        <View style={styles.sigBlock}>
          <Text style={styles.sigLabel}>Signed:</Text>
          <View style={styles.sigLine} />
        </View>
        <View style={styles.sigBlock}>
          <Text style={styles.sigLabel}>Date:</Text>
          <View style={styles.sigLine} />
        </View>
      </View>
    </WorksheetPage>
  </Document>
);

export default CompletionWorksheet;
