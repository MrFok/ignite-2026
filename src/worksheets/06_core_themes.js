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
  
  themeBlock: {
    marginBottom: SPACING.md,
  },
  
  themeNumber: {
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
});

const CoreThemesWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="2.1" 
      title="Your Core Themes"
      subtitle='Session 2: Vision Boarding - "Who You Want to Become"'
      section="DAY 1"
      pageNumber={1}
      totalPages={1}
    >
      <Text style={styles.objective}>
        If you were summed up in 3 words or themes, what would they be? 
        (Draw from your wins, lessons, and the person you want to be.)
      </Text>
      
      <View style={styles.themeBlock}>
        <Text style={styles.themeNumber}>Theme #1:</Text>
        <DotGridField height={24} />
        <DotGridField label="What does this look like in action?" height={32} />
      </View>
      
      <AsciiBorder type="thin" />
      
      <View style={styles.themeBlock}>
        <Text style={styles.themeNumber}>Theme #2:</Text>
        <DotGridField height={24} />
        <DotGridField label="What does this look like in action?" height={32} />
      </View>
      
      <AsciiBorder type="thin" />
      
      <View style={styles.themeBlock}>
        <Text style={styles.themeNumber}>Theme #3:</Text>
        <DotGridField height={24} />
        <DotGridField label="What does this look like in action?" height={32} />
      </View>
    </WorksheetPage>
  </Document>
);

export default CoreThemesWorksheet;
