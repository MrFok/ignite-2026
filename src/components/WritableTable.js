const React = require('react');
const { View, Text, StyleSheet } = require('@react-pdf/renderer');
const { COLORS, TYPOGRAPHY, SPACING } = require('../styles/theme.js');

const styles = StyleSheet.create({
  table: {
    marginVertical: SPACING.sm,
  },
  
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black,
    paddingBottom: SPACING.xs,
    marginBottom: SPACING.xs,
  },
  
  row: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.lightGray,
    minHeight: 24,
    alignItems: 'center',
  },
  
  cell: {
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.xs,
  },
  
  headerCell: {
    fontSize: TYPOGRAPHY.sizes.xs,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  
  bodyCell: {
    fontSize: TYPOGRAPHY.sizes.sm,
  },
});

const WritableTable = ({ 
  headers = [], 
  rows = 3, 
  columnWidths = [],
}) => {
  const widths = columnWidths.length === headers.length 
    ? columnWidths 
    : headers.map(() => `${100 / headers.length}%`);
  
  return React.createElement(View, { style: styles.table },
    // Header Row
    React.createElement(View, { style: styles.headerRow },
      headers.map((header, i) => 
        React.createElement(View, { key: i, style: [styles.cell, { width: widths[i] }] },
          React.createElement(Text, { style: styles.headerCell }, header)
        )
      )
    ),
    // Body Rows
    Array.from({ length: rows }).map((_, rowIndex) =>
      React.createElement(View, { key: rowIndex, style: styles.row },
        headers.map((_, colIndex) =>
          React.createElement(View, { key: colIndex, style: [styles.cell, { width: widths[colIndex] }] },
            React.createElement(Text, { style: styles.bodyCell }, ' ')
          )
        )
      )
    )
  );
};

module.exports = { default: WritableTable };
