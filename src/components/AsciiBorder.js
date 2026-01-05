const React = require('react');
const { View, Text, StyleSheet } = require('@react-pdf/renderer');
const { COLORS, TYPOGRAPHY, SPACING } = require('../styles/theme.js');

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING.sm,
  },
  
  borderLine: {
    fontSize: TYPOGRAPHY.sizes.xs,
    color: COLORS.lightGray,
    letterSpacing: -0.5,
  },
  
  thinLine: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.lightGray,
    marginVertical: SPACING.sm,
  },
  
  thickLine: {
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.black,
    marginVertical: SPACING.md,
  },
  
  doubleLine: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black,
    marginVertical: SPACING.md,
    paddingBottom: 2,
    borderTopWidth: 1,
    borderTopColor: COLORS.black,
    height: 4,
  },
  
  dashedLine: {
    fontSize: TYPOGRAPHY.sizes.xs,
    color: COLORS.gray,
    textAlign: 'center',
    letterSpacing: 2,
  },
});

const AsciiBorder = ({ type = 'thin', width = 'full' }) => {
  switch (type) {
    case 'dashed':
      return React.createElement(View, { style: styles.container },
        React.createElement(Text, { style: styles.dashedLine }, '- - - - - - - - - - - - - - - - - - - - - - - - - - - -')
      );
    
    case 'dots':
      return React.createElement(View, { style: styles.container },
        React.createElement(Text, { style: styles.dashedLine }, '. . . . . . . . . . . . . . . . . . . . . . . . . . . .')
      );
    
    case 'double':
      return React.createElement(View, { style: styles.doubleLine });
    
    case 'thick':
      return React.createElement(View, { style: styles.thickLine });
    
    case 'ascii':
      return React.createElement(View, { style: styles.container },
        React.createElement(Text, { style: styles.borderLine }, '=' + '.'.repeat(60) + '=')
      );
    
    case 'thin':
    default:
      return React.createElement(View, { style: styles.thinLine });
  }
};

module.exports = { default: AsciiBorder };
