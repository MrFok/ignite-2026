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
  
  section: {
    marginBottom: SPACING.md,
  },
  
  goalTitle: {
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
  
  expTitle: {
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
    backgroundColor: COLORS.black,
    color: COLORS.white,
    padding: SPACING.xs,
  },
});

const TinyExperimentsWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="5.1" 
      title="Your Top 3 Uncertain Goals"
      subtitle="Session 5: Tiny Experiments"
      section="DAY 2"
      pageNumber={1}
      totalPages={3}
    >
      <Text style={styles.objective}>
        Objective: Test ideas and build habits through small, low-stakes experiments, as described in Anne-Laure Le Cunff’s Spark session.
      </Text>
      
      <Text style={styles.objective}>
        Pick 3 goals where you're not 100% sure of the best approach:
      </Text>
      
      <View style={styles.section}>
        <Text style={styles.goalTitle}>Goal 1:</Text>
        <DotGridField height={24} />
        <DotGridField label="What I'm uncertain about:" height={28} />
      </View>
      
      <AsciiBorder type="dashed" />
      
      <View style={styles.section}>
        <Text style={styles.goalTitle}>Goal 2:</Text>
        <DotGridField height={24} />
        <DotGridField label="What I'm uncertain about:" height={28} />
      </View>
      
      <AsciiBorder type="dashed" />
      
      <View style={styles.section}>
        <Text style={styles.goalTitle}>Goal 3:</Text>
        <DotGridField height={24} />
        <DotGridField label="What I'm uncertain about:" height={28} />
      </View>
    </WorksheetPage>
    
    <WorksheetPage 
      number="5.2" 
      title="Design Your Tiny Experiments"
      subtitle="Session 5: Tiny Experiments"
      section="DAY 2"
      pageNumber={2}
      totalPages={3}
    >
      <View style={styles.section}>
        <Text style={styles.expTitle}>EXPERIMENT 1</Text>
        <DotGridField label="The question I want to answer:" height={20} />
        <DotGridField label="The experiment (what, how often, how long):" height={24} />
        <DotGridField label="Duration:" height={16} />
        <DotGridField label="Success metric:" height={16} />
        <DotGridField label="What I'll do after:" height={20} />
      </View>
      
      <AsciiBorder type="thick" />
      
      <View style={styles.section}>
        <Text style={styles.expTitle}>EXPERIMENT 2</Text>
        <DotGridField label="The question I want to answer:" height={20} />
        <DotGridField label="The experiment:" height={24} />
        <DotGridField label="Duration:" height={16} />
        <DotGridField label="Success metric:" height={16} />
        <DotGridField label="What I'll do after:" height={20} />
      </View>
    </WorksheetPage>
    
    <WorksheetPage 
      number="5.3" 
      title="Experimental Mindset"
      subtitle="Session 5: Tiny Experiments"
      section="DAY 2"
      pageNumber={3}
      totalPages={3}
    >
      <View style={styles.section}>
        <Text style={styles.expTitle}>EXPERIMENT 3</Text>
        <DotGridField label="The question I want to answer:" height={20} />
        <DotGridField label="The experiment:" height={24} />
        <DotGridField label="Duration:" height={16} />
        <DotGridField label="Success metric:" height={16} />
        <DotGridField label="What I'll do after:" height={20} />
      </View>
      
      <AsciiBorder type="thick" />
      
      <DotGridField 
        label='What belief am I letting go of? (e.g., “I have to get it right on day one”)' 
        height={28}
      />
      
      <DotGridField 
        label='What new belief am I adopting? (e.g., “I learn best by trying small things”)' 
        height={28}
      />
      
      <DotGridField 
        label="How will this change my approach to 2026?" 
        height={28}
      />
    </WorksheetPage>
  </Document>
);

export default TinyExperimentsWorksheet;
