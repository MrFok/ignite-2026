const React = require('react');
const { View, Text, StyleSheet } = require('@react-pdf/renderer');
const { COLORS, TYPOGRAPHY, SPACING } = require('../styles/theme.js');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
    paddingBottom: SPACING.sm,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.black,
  },
  
  bracket: {
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: 'bold',
    marginRight: SPACING.sm,
  },
  
  titleContainer: {
    flex: 1,
  },
  
  title: {
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  
  subtitle: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.gray,
    marginTop: 2,
  },
  
  cursor: {
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: 'bold',
  },
  
  pageNumber: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.gray,
  },
});

const TerminalHeader = ({ number, title, subtitle, pageNumber }) => {
  return React.createElement(View, { style: styles.container },
    React.createElement(Text, { style: styles.bracket }, `[${number}]`),
    React.createElement(View, { style: styles.titleContainer },
      React.createElement(Text, { style: styles.title }, title, React.createElement(Text, { style: styles.cursor }, '_')),
      subtitle && React.createElement(Text, { style: styles.subtitle }, subtitle)
    ),
    pageNumber && React.createElement(Text, { style: styles.pageNumber }, `P.${pageNumber}`)
  );
};

module.exports = { default: TerminalHeader };
