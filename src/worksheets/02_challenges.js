import React from 'react';
import { Document, View, Text, StyleSheet } from '@react-pdf/renderer';
import { WorksheetPage } from '../templates/index.js';
import { DotGridField, AsciiBorder } from '../components/index.js';
import { TYPOGRAPHY, SPACING, COLORS } from '../styles/theme.js';

const styles = StyleSheet.create({
  intro: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.gray,
    marginBottom: SPACING.md,
  },
  
  block: {
    marginBottom: SPACING.md,
  },
  
  title: {
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
});

const ChallengesWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="1.2" 
      title="Biggest Challenges & Lessons"
      subtitle="Session 1: 2025 — A Year In Review"
      section="DAY 1"
      pageNumber={1}
      totalPages={2}
    >
      <Text style={styles.intro}>
        Write 3–5 challenges, setbacks, or low points from 2025:
      </Text>
      
      <View style={styles.block}>
        <Text style={styles.title}>Challenge #1:</Text>
        <DotGridField label="What actually happened:" height={24} />
        <DotGridField label="What I learned:" height={24} />
        <DotGridField label="If I faced this again, I would:" height={24} />
      </View>
      
      <AsciiBorder type="dashed" />
      
      <View style={styles.block}>
        <Text style={styles.title}>Challenge #2:</Text>
        <DotGridField label="What actually happened:" height={24} />
        <DotGridField label="What I learned:" height={24} />
        <DotGridField label="If I faced this again, I would:" height={24} />
      </View>
    </WorksheetPage>
    
    <WorksheetPage 
      number="1.2" 
      title="Biggest Challenges & Lessons"
      subtitle="continued"
      section="DAY 1"
      pageNumber={2}
      totalPages={2}
    >
      <View style={styles.block}>
        <Text style={styles.title}>Challenge #3:</Text>
        <DotGridField label="What actually happened:" height={32} />
        <DotGridField label="What I learned:" height={32} />
        <DotGridField label="If I faced this again, I would:" height={32} />
      </View>
    </WorksheetPage>
  </Document>
);

export default ChallengesWorksheet;
