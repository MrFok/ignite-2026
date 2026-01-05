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
  
  layer: {
    fontSize: TYPOGRAPHY.sizes.xs,
    marginBottom: 2,
    paddingLeft: SPACING.sm,
  },
  
  habitTitle: {
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
    backgroundColor: COLORS.black,
    color: COLORS.white,
    padding: SPACING.xs,
  },
  
  habit: {
    marginBottom: SPACING.md,
  },
});

const LifeOSWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="7.1" 
      title="LifeOS Structure"
      subtitle="Session 7: Build Your Life Operating System (LifeOS)"
      section="DAY 2"
      pageNumber={1}
      totalPages={2}
    >
      <Text style={styles.objective}>
        Objective: Create sustainable frameworks, tools, and systems that make action more inevitable, in line with Ali’s “personal success system” and LifeOS content.
      </Text>
      
      <Text style={styles.objective}>A simple LifeOS has 4 layers:</Text>
      <Text style={styles.layer}>1. Vision Layer – Your theme, core values, and 12-month goals</Text>
      <Text style={styles.layer}>2. Systems Layer – Habits, routines, and weekly rhythms</Text>
      <Text style={styles.layer}>3. Tracking Layer – What you measure to stay aware</Text>
      <Text style={styles.layer}>4. Review Layer – Weekly, monthly, and quarterly reviews</Text>
      
      <AsciiBorder type="thick" />
      
      <Text style={styles.objective}>
        Pick 3–5 habits that, if done consistently, make everything else easier:
      </Text>
      
      <View style={styles.habit}>
        <Text style={styles.habitTitle}>KEYSTONE HABIT 1</Text>
        <DotGridField label="Name:" height={16} />
        <DotGridField label="When/Where it happens:" height={16} />
        <DotGridField label="The minimum version:" height={16} />
        <DotGridField label="Why it matters to my vision:" height={16} />
        <DotGridField label="How I'll remember:" height={16} />
      </View>
    </WorksheetPage>
    
    <WorksheetPage 
      number="7.2" 
      title="Your Keystone Habits"
      subtitle="continued"
      section="DAY 2"
      pageNumber={2}
      totalPages={2}
    >
      <View style={styles.habit}>
        <Text style={styles.habitTitle}>KEYSTONE HABIT 2</Text>
        <DotGridField label="Name:" height={16} />
        <DotGridField label="When/Where it happens:" height={16} />
        <DotGridField label="The minimum version:" height={16} />
        <DotGridField label="Why it matters to my vision:" height={16} />
        <DotGridField label="How I'll remember:" height={16} />
      </View>
      
      <AsciiBorder type="dashed" />
      
      <View style={styles.habit}>
        <Text style={styles.habitTitle}>KEYSTONE HABIT 3</Text>
        <DotGridField label="Name:" height={16} />
        <DotGridField label="When/Where it happens:" height={16} />
        <DotGridField label="The minimum version:" height={16} />
        <DotGridField label="Why it matters to my vision:" height={16} />
        <DotGridField label="How I'll remember:" height={16} />
      </View>
    </WorksheetPage>
  </Document>
);

export default LifeOSWorksheet;
