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
  
  action: {
    marginBottom: SPACING.md,
  },
  
  actionNum: {
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
});

const FirstWeekWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="8.2" 
      title="Your First Week Action Plan"
      subtitle="Session 8: Your Vision, Locked In"
      section="DAY 2"
      pageNumber={1}
      totalPages={1}
    >
      <Text style={styles.intro}>
        This week, I will:
      </Text>
      
      <View style={styles.action}>
        <Text style={styles.actionNum}>1. Set up my weekly planning time:</Text>
        <DotGridField height={28} />
      </View>
      
      <AsciiBorder type="dashed" />
      
      <View style={styles.action}>
        <Text style={styles.actionNum}>2. Test one keystone habit:</Text>
        <DotGridField height={28} />
      </View>
      
      <AsciiBorder type="dashed" />
      
      <View style={styles.action}>
        <Text style={styles.actionNum}>3. Run one tiny experiment:</Text>
        <DotGridField height={28} />
      </View>
      
      <AsciiBorder type="dashed" />
      
      <View style={styles.action}>
        <Text style={styles.actionNum}>4. Practice one DOSE shift:</Text>
        <DotGridField height={28} />
      </View>
    </WorksheetPage>
  </Document>
);

export default FirstWeekWorksheet;
