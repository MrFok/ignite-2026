const React = require('react');
const { View, Text, StyleSheet } = require('@react-pdf/renderer');
const { COLORS, TYPOGRAPHY, SPACING } = require('../styles/theme.js');

const styles = StyleSheet.create({
  list: {
    marginVertical: SPACING.xs,
  },
  
  item: {
    flexDirection: 'row',
    marginBottom: SPACING.xs,
  },
  
  bullet: {
    width: 12,
    fontSize: TYPOGRAPHY.sizes.sm,
  },
  
  content: {
    flex: 1,
    fontSize: TYPOGRAPHY.sizes.sm,
  },
  
  writableItem: {
    flexDirection: 'row',
    marginBottom: SPACING.sm,
    alignItems: 'flex-end',
  },
  
  writeLine: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.lightGray,
    marginLeft: SPACING.xs,
    height: 14,
  },
});

const BulletList = ({ 
  items = [], 
  writable = false, 
  bulletChar = '-',
  emptyLines = 0,
}) => {
  const allItems = [...items];
  
  for (let i = 0; i < emptyLines; i++) {
    allItems.push('');
  }
  
  return React.createElement(View, { style: styles.list },
    allItems.map((item, i) =>
      React.createElement(View, { key: i, style: writable ? styles.writableItem : styles.item },
        React.createElement(Text, { style: styles.bullet }, bulletChar),
        writable
          ? React.createElement(View, { style: styles.writeLine },
              item && React.createElement(Text, { style: styles.content }, item)
            )
          : React.createElement(Text, { style: styles.content }, item)
      )
    )
  );
};

module.exports = { default: BulletList };
