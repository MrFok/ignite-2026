const React = require('react');
const { Document, Page, View, StyleSheet } = require('@react-pdf/renderer');
const { PAGE, COLORS, TYPOGRAPHY } = require('../styles/theme.js');
const { TerminalHeader, PageFooter } = require('../components/index.js');

const styles = StyleSheet.create({
  page: {
    width: `${PAGE.width}mm`,
    height: `${PAGE.height}mm`,
    paddingTop: PAGE.marginTop,
    paddingBottom: PAGE.marginBottom + 8,
    paddingLeft: PAGE.marginLeft,
    paddingRight: PAGE.marginRight,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSize: TYPOGRAPHY.sizes.base,
    backgroundColor: COLORS.white,
    color: COLORS.black,
  },
  
  content: {
    flex: 1,
  },
});

const WorksheetPage = ({ 
  number,
  title, 
  subtitle,
  section,
  pageNumber = 1,
  totalPages = 1,
  children,
}) => {
  // Convert mm to points (1mm = 2.8346 points)
  const pageSize = [PAGE.width * 2.8346, PAGE.height * 2.8346];
  
  return React.createElement(Page, { size: pageSize, style: styles.page },
    React.createElement(TerminalHeader, { 
      number, 
      title, 
      subtitle 
    }),
    React.createElement(View, { style: styles.content }, children),
    React.createElement(PageFooter, { 
      pageNumber, 
      totalPages,
      section 
    })
  );
};

module.exports = { default: WorksheetPage };
