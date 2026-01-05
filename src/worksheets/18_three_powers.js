import React from 'react';
import { Document, View, Text, StyleSheet } from '@react-pdf/renderer';
import { WorksheetPage } from '../templates/index.js';
import { DotGridField, AsciiBorder } from '../components/index.js';
import { TYPOGRAPHY, SPACING, COLORS } from '../styles/theme.js';

const styles = StyleSheet.create({
  powerTitle: {
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
    textTransform: 'uppercase',
  },
  
  power: {
    marginBottom: SPACING.md,
  },
  
  rewriteTitle: {
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: 'bold',
    marginBottom: SPACING.sm,
    backgroundColor: COLORS.black,
    color: COLORS.white,
    padding: SPACING.xs,
  },
});

const ThreePowersWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="6.2" 
      title="The Three Powers of Belief"
      subtitle="Session 6: Beyond Belief"
      section="DAY 2"
      pageNumber={1}
      totalPages={2}
    >
      <Text style={{ fontSize: TYPOGRAPHY.sizes.sm, marginBottom: SPACING.sm, color: COLORS.gray }}>
        Nir frames belief in terms of what you pay attention to, what you anticipate, and what you feel capable of.
      </Text>

      <View style={styles.power}>
        <Text style={styles.powerTitle}>ATTENTION: What You Believe, You Notice</Text>
        <DotGridField label="My new belief:" height={24} />
        <DotGridField label="What will I start noticing as a result? (Opportunities, capabilities, resources)" height={28} />
      </View>
      
      <AsciiBorder type="thick" />
      
      <View style={styles.power}>
        <Text style={styles.powerTitle}>ANTICIPATION: What You Believe, You Expect</Text>
        <DotGridField label="My new belief:" height={24} />
        <DotGridField label="What will I start expecting or attracting in 2026?" height={28} />
      </View>
      
      <AsciiBorder type="thick" />
      
      <View style={styles.power}>
        <Text style={styles.powerTitle}>AGENCY: What You Believe, You Can Do</Text>
        <DotGridField label="My new belief:" height={24} />
        <DotGridField label="What becomes possible for me now?" height={28} />
      </View>
    </WorksheetPage>
    
    <WorksheetPage 
      number="6.3" 
      title="Rewriting Your Story"
      subtitle="Session 6: Beyond Belief"
      section="DAY 2"
      pageNumber={2}
      totalPages={2}
    >
      <Text style={styles.rewriteTitle}>REWRITE YOUR STORY</Text>
      
      <DotGridField 
        label="Pick your biggest limiting belief from 6.1:" 
        height={28}
      />
      
      <DotGridField 
        label="The old story I've been telling myself:" 
        height={32}
      />
      
      <DotGridField 
        label="Evidence that challenged this belief (even small wins):" 
        height={32}
      />
      
      <DotGridField 
        label="The new story I'm choosing:" 
        height={32}
      />
      
      <DotGridField 
        label="One action I'll take this week that proves this new story:" 
        height={28}
      />
    </WorksheetPage>
  </Document>
);

export default ThreePowersWorksheet;
