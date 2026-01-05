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
  
  question: {
    marginBottom: SPACING.md,
  },
});

const ReviewsWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="7.5" 
      title="Monthly & Quarterly Reviews"
      subtitle="Session 7: Build Your LifeOS"
      section="DAY 2"
      pageNumber={1}
      totalPages={1}
    >
      <Text style={styles.intro}>
        Once a month (and at the end of each quarter), ask:
      </Text>
      
      <View style={styles.question}>
        <DotGridField 
          label="1. What progress did I make on my 12-month vision and current quest?" 
          height={32}
        />
      </View>
      
      <View style={styles.question}>
        <DotGridField 
          label="2. Which keystone habits stuck? Which didn't?" 
          height={32}
        />
      </View>
      
      <View style={styles.question}>
        <DotGridField 
          label="3. What experiments worked? What do I need to adjust?" 
          height={32}
        />
      </View>
      
      <View style={styles.question}>
        <DotGridField 
          label="4. What do I need to drop, add, or change for next month/quarter?" 
          height={32}
        />
      </View>
    </WorksheetPage>
  </Document>
);

export default ReviewsWorksheet;
