const React = require('react');
const { View, Text, StyleSheet } = require('@react-pdf/renderer');
const { COLORS, TYPOGRAPHY, SPACING, PAGE } = require('../styles/theme.js');

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 6,
    left: PAGE.marginLeft,
    right: PAGE.marginRight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  brand: {
    fontSize: TYPOGRAPHY.sizes.xs,
    color: COLORS.gray,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  
  pageInfo: {
    fontSize: TYPOGRAPHY.sizes.xs,
    color: COLORS.gray,
  },
});

const PageFooter = ({ pageNumber, totalPages, section }) => {
  return React.createElement(View, { style: styles.footer, fixed: true },
    React.createElement(Text, { style: styles.brand }, 'IGNITE 2026'),
    section && React.createElement(Text, { style: styles.pageInfo }, section),
    React.createElement(Text, { style: styles.pageInfo }, `${pageNumber}/${totalPages}`)
  );
};

module.exports = { default: PageFooter };
