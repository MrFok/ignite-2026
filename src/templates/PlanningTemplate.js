import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { COLORS, TYPOGRAPHY, SPACING } from '../styles/theme.js';
import { DotGridField, BulletList, AsciiBorder, SectionBlock } from '../components/index.js';

const styles = StyleSheet.create({
  objective: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.gray,
    marginBottom: SPACING.md,
    
    paddingLeft: SPACING.sm,
    borderLeftWidth: 2,
    borderLeftColor: COLORS.lightGray,
  },
  
  goalSection: {
    marginBottom: SPACING.md,
  },
  
  goalTitle: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
});

/**
 * PlanningTemplate - For goal-setting and planning sections
 * Used for: Quarterly Quests, Experiments, Action Plans
 */
const PlanningTemplate = ({ 
  objective,
  sections = [],
}) => {
  return (
    <View>
      {objective && <Text style={styles.objective}>{objective}</Text>}
      
      {sections.map((section, index) => (
        <View key={index} style={styles.goalSection}>
          <SectionBlock title={section.title}>
            {section.fields && section.fields.map((field, fieldIndex) => (
              <DotGridField
                key={fieldIndex}
                label={field.label}
                prompt={field.prompt}
                height={field.height || 24}
              />
            ))}
            
            {section.bullets && (
              <BulletList 
                items={section.bullets} 
                writable={true}
                emptyLines={section.emptyLines || 0}
              />
            )}
          </SectionBlock>
          
          {index < sections.length - 1 && <AsciiBorder type="dashed" />}
        </View>
      ))}
    </View>
  );
};

export default PlanningTemplate;
