const React = require('react');
const { View, Text, StyleSheet } = require('@react-pdf/renderer');
const { COLORS, TYPOGRAPHY, SPACING } = require('../styles/theme.js');

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
  },
  
  label: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
  
  prompt: {
    fontSize: TYPOGRAPHY.sizes.xs,
    color: COLORS.gray,
    marginBottom: SPACING.xs,
    
  },
  
  fieldContainer: {
    position: 'relative',
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.lightGray,
  },
  
  fieldContainerNoBorder: {
    position: 'relative',
    backgroundColor: COLORS.white,
  },
  
});

const DotGridField = ({ 
  label, 
  prompt, 
  height = 30, 
  showBorder = true,
}) => {
  const fieldStyle = showBorder 
    ? [styles.fieldContainer, { height: `${height}mm` }]
    : [styles.fieldContainerNoBorder, { height: `${height}mm` }];
  
  // wrap: false prevents the label and input from being split across pages
  return React.createElement(View, { style: styles.container, wrap: false },
    label && React.createElement(Text, { style: styles.label }, label),
    prompt && React.createElement(Text, { style: styles.prompt }, prompt),
    React.createElement(View, { style: fieldStyle })
  );
};

module.exports = { default: DotGridField };
