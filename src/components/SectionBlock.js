const React = require('react');
const { View, Text, StyleSheet } = require('@react-pdf/renderer');
const { COLORS, TYPOGRAPHY, SPACING } = require('../styles/theme.js');

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  
  chevron: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    marginRight: SPACING.xs,
  },
  
  title: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  
  content: {
    paddingLeft: SPACING.md,
  },
  
  boxed: {
    borderWidth: 0.5,
    borderColor: COLORS.lightGray,
    padding: SPACING.sm,
  },
  
  highlighted: {
    backgroundColor: '#F5F5F5',
    padding: SPACING.sm,
  },
});

const SectionBlock = ({ 
  title, 
  children, 
  variant = 'default',
  showChevron = true,
}) => {
  const contentStyle = [
    styles.content,
    variant === 'boxed' && styles.boxed,
    variant === 'highlighted' && styles.highlighted,
  ];
  
  return React.createElement(View, { style: styles.container },
    title && React.createElement(View, { style: styles.header },
      showChevron && React.createElement(Text, { style: styles.chevron }, '>'),
      React.createElement(Text, { style: styles.title }, title)
    ),
    React.createElement(View, { style: contentStyle }, children)
  );
};

module.exports = { default: SectionBlock };
