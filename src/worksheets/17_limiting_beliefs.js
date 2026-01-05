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
  
  areaTitle: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black,
    paddingBottom: 2,
  },
  
  area: {
    marginBottom: SPACING.md,
  },
});

const LimitingBeliefsWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="6.1" 
      title="Uncovering Limiting Beliefs"
      subtitle="Session 6: Beyond Belief — Reframe Your Limiting Assumptions"
      section="DAY 2"
      pageNumber={1}
      totalPages={2}
    >
      <Text style={styles.objective}>
        Objective: Uncover hidden assumptions that limit you. Activate Attention, Anticipation, and Agency, reflecting Nir Eyal’s “Beyond Belief” session.
      </Text>
      
      <Text style={styles.objective}>
        For each life area, write a limiting belief you hold:
      </Text>
      
      <View style={styles.area}>
        <Text style={styles.areaTitle}>Health & Energy</Text>
        <DotGridField label="I believe:" height={20} />
        <DotGridField label="This belief limits me by:" height={20} />
        <DotGridField label="A truer or more empowering belief would be:" height={20} />
      </View>
      
      <AsciiBorder type="dashed" />
      
      <View style={styles.area}>
        <Text style={styles.areaTitle}>Relationships</Text>
        <DotGridField label="I believe:" height={20} />
        <DotGridField label="This belief limits me by:" height={20} />
        <DotGridField label="A truer or more empowering belief would be:" height={20} />
      </View>
    </WorksheetPage>
    
    <WorksheetPage 
      number="6.1" 
      title="Uncovering Limiting Beliefs"
      subtitle="continued"
      section="DAY 2"
      pageNumber={2}
      totalPages={2}
    >
      <View style={styles.area}>
        <Text style={styles.areaTitle}>Work / Career</Text>
        <DotGridField label="I believe:" height={20} />
        <DotGridField label="This belief limits me by:" height={20} />
        <DotGridField label="A truer or more empowering belief would be:" height={20} />
      </View>
      
      <AsciiBorder type="dashed" />
      
      <View style={styles.area}>
        <Text style={styles.areaTitle}>Personal Growth</Text>
        <DotGridField label="I believe:" height={20} />
        <DotGridField label="This belief limits me by:" height={20} />
        <DotGridField label="A truer or more empowering belief would be:" height={20} />
      </View>
    </WorksheetPage>
  </Document>
);

export default LimitingBeliefsWorksheet;
