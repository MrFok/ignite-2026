import React from 'react';
import { Document, View, Text, StyleSheet } from '@react-pdf/renderer';
import { WorksheetPage } from '../templates/index.js';
import { DotGridField, AsciiBorder, SectionBlock } from '../components/index.js';
import { TYPOGRAPHY, SPACING, COLORS } from '../styles/theme.js';

const styles = StyleSheet.create({
  intro: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.gray,
    marginBottom: SPACING.md,
  },
  
  quest: {
    marginBottom: SPACING.md,
  },
  
  questTitle: {
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
    backgroundColor: COLORS.black,
    color: COLORS.white,
    padding: SPACING.xs,
  },
});

const QuarterlyQuestsWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="1.4" 
      title="Quarterly Quests" 
      subtitle="Break your year into 4 quests"
      section="DAY 1"
      pageNumber={1}
      totalPages={2}
    >
      <Text style={styles.intro}>
        Break your year into 4 quests that express your theme in concrete ways.
      </Text>
      
      <View style={styles.quest}>
        <Text style={styles.questTitle}>Q1 QUEST (JAN-MAR)</Text>
        <DotGridField label="Quest name:" height={20} />
        <DotGridField label="What “success” looks like by end of Q1:" height={24} />
        <DotGridField label="One visible milestone or metric:" height={20} />
      </View>
      
      <AsciiBorder type="dashed" />
      
      <View style={styles.quest}>
        <Text style={styles.questTitle}>Q2 QUEST (APR-JUN)</Text>
        <DotGridField label="Quest name:" height={20} />
        <DotGridField label="What “success” looks like by end of Q2:" height={24} />
        <DotGridField label="One visible milestone or metric:" height={20} />
      </View>
    </WorksheetPage>
    
    <WorksheetPage 
      number="1.4" 
      title="Quarterly Quests"
      subtitle="continued"
      section="DAY 1"
      pageNumber={2}
      totalPages={2}
    >
      <View style={styles.quest}>
        <Text style={styles.questTitle}>Q3 QUEST (JUL-SEP)</Text>
        <DotGridField label="Quest name:" height={20} />
        <DotGridField label="What “success” looks like by end of Q3:" height={24} />
        <DotGridField label="One visible milestone or metric:" height={20} />
      </View>
      
      <AsciiBorder type="dashed" />
      
      <View style={styles.quest}>
        <Text style={styles.questTitle}>Q4 QUEST (OCT-DEC)</Text>
        <DotGridField label="Quest name:" height={20} />
        <DotGridField label="What “success” looks like by end of Q4:" height={24} />
        <DotGridField label="One visible milestone or metric:" height={20} />
      </View>
    </WorksheetPage>
  </Document>
);

export default QuarterlyQuestsWorksheet;
