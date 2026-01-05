import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { COLORS, TYPOGRAPHY, SPACING } from '../styles/theme.js';
import { DotGridField, AsciiBorder, SectionBlock } from '../components/index.js';

const styles = StyleSheet.create({
  intro: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.gray,
    marginBottom: SPACING.md,
    
  },
  
  itemContainer: {
    marginBottom: SPACING.md,
  },
  
  itemHeader: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
});

/**
 * ReflectionTemplate - For win/challenge/lesson type entries
 * Used for: Wins, Challenges, Core Themes
 */
const ReflectionTemplate = ({ 
  intro,
  items = [],
  fieldsPerItem = [],
}) => {
  return (
    <View>
      {intro && <Text style={styles.intro}>{intro}</Text>}
      
      {items.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.itemHeader}>{item.title}</Text>
          
          {fieldsPerItem.map((field, fieldIndex) => (
            <DotGridField
              key={fieldIndex}
              label={field.label}
              prompt={field.prompt}
              height={field.height || 28}
            />
          ))}
          
          {index < items.length - 1 && <AsciiBorder type="thin" />}
        </View>
      ))}
    </View>
  );
};

export default ReflectionTemplate;
