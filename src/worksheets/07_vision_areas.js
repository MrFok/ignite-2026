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
  
  areaTitle: {
    fontSize: TYPOGRAPHY.sizes.md,
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

const VisionAreasWorksheet = () => (
  <Document>
    <WorksheetPage 
      number="2.2" 
      title="Vision Across Life Areas"
      subtitle="Next 12 Months"
      section="DAY 1"
      pageNumber={1}
      totalPages={2}
    >
      <Text style={styles.intro}>
        For each area, write 2-3 things you want to see, experience, or become:
      </Text>
      
      <View style={styles.area}>
        <Text style={styles.areaTitle}>Health & Energy</Text>
        <DotGridField label="Goal 1:" height={20} />
        <DotGridField label="Why it matters:" height={20} />
        <DotGridField label="Goal 2:" height={20} />
        <DotGridField label="Why it matters:" height={20} />
      </View>
      
      <AsciiBorder type="thick" />
      
      <View style={styles.area}>
        <Text style={styles.areaTitle}>Relationships & Family</Text>
        <DotGridField label="Goal 1:" height={20} />
        <DotGridField label="Why it matters:" height={20} />
        <DotGridField label="Goal 2:" height={20} />
        <DotGridField label="Why it matters:" height={20} />
      </View>
    </WorksheetPage>
    
    <WorksheetPage 
      number="2.2" 
      title="Vision Across Life Areas"
      subtitle="continued"
      section="DAY 1"
      pageNumber={2}
      totalPages={2}
    >
      <View style={styles.area}>
        <Text style={styles.areaTitle}>Work / Career / Business</Text>
        <DotGridField label="Goal 1:" height={20} />
        <DotGridField label="Why it matters:" height={20} />
        <DotGridField label="Goal 2:" height={20} />
        <DotGridField label="Why it matters:" height={20} />
      </View>
      
      <AsciiBorder type="thick" />
      
      <View style={styles.area}>
        <Text style={styles.areaTitle}>Personal Growth / Learning / Fun</Text>
        <DotGridField label="Goal 1:" height={20} />
        <DotGridField label="Why it matters:" height={20} />
        <DotGridField label="Goal 2:" height={20} />
        <DotGridField label="Why it matters:" height={20} />
      </View>
    </WorksheetPage>
  </Document>
);

export default VisionAreasWorksheet;
