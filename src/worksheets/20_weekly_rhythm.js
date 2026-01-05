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
  
  section: {
    marginBottom: SPACING.md,
  },
  
  sectionTitle: {
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
    textTransform: 'uppercase',
  },
});

const WeeklyRhythmWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="7.3" 
      title="Your Weekly Rhythm"
      subtitle="Session 7: Build Your LifeOS"
      section="DAY 2"
      pageNumber={1}
      totalPages={2}
    >
      <Text style={styles.intro}>
        Create a simple weekly cadence so you stay aligned with your vision without burning out.
      </Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Weekly Planning Session</Text>
        <DotGridField label="Day & Time:" height={16} />
        <DotGridField label="Duration: (15–30 minutes)" height={16} />
        <DotGridField label="Location:" height={16} />
      </View>
      
      <AsciiBorder type="thick" />
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>During your weekly session, answer:</Text>
        <DotGridField label="1. What moved forward this week?" height={24} />
        <DotGridField label="2. What got stuck? Why?" height={24} />
        <DotGridField label="3. What are my 3 Big Rocks for next week?" height={24} />
      </View>
    </WorksheetPage>
    
    <WorksheetPage 
      number="7.4" 
      title="Your Tracking System"
      subtitle="Simple Focus Log"
      section="DAY 2"
      pageNumber={2}
      totalPages={2}
    >
      <Text style={styles.intro}>
        Pick 1–3 focus areas and track focused time on them.
      </Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My 3 Focus Areas for 2026:</Text>
        <DotGridField label="1." height={20} />
        <DotGridField label="2." height={20} />
        <DotGridField label="3." height={20} />
      </View>
      
      <AsciiBorder type="dashed" />
      
      <DotGridField label="How I'll track:" height={28} />
      <DotGridField label="How often I'll review:" height={28} />
    </WorksheetPage>
  </Document>
);

export default WeeklyRhythmWorksheet;
