const React = require('react');
const { Document, Page, View, Text, Image, StyleSheet } = require('@react-pdf/renderer');
const { PAGE, COLORS, TYPOGRAPHY, SPACING } = require('../styles/theme.js');
const path = require('path');

const styles = StyleSheet.create({
  page: {
    width: `${PAGE.width}mm`,
    height: `${PAGE.height}mm`,
    paddingTop: PAGE.marginTop,
    paddingBottom: PAGE.marginBottom,
    paddingLeft: PAGE.marginLeft,
    paddingRight: PAGE.marginRight,
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSize: TYPOGRAPHY.sizes.base,
    backgroundColor: COLORS.white,
    color: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.xl,
  },
  
  logo: {
    width: 60,
    height: 60,
    marginBottom: SPACING.lg,
  },
  
  title: {
    fontSize: TYPOGRAPHY.sizes.xxl,
    fontWeight: 'bold',
    marginBottom: SPACING.sm,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  
  subtitle: {
    fontSize: TYPOGRAPHY.sizes.lg,
    color: COLORS.gray,
    marginBottom: SPACING.xl,
    textAlign: 'center',
  },
  
  author: {
    fontSize: TYPOGRAPHY.sizes.md,
    marginBottom: SPACING.xl,
    textAlign: 'center',
  },
  
  divider: {
    width: '60%',
    height: 1,
    backgroundColor: COLORS.lightGray,
    marginVertical: SPACING.lg,
  },
  
  description: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.gray,
    lineHeight: 1.6,
    textAlign: 'center',
    marginBottom: SPACING.md,
    paddingHorizontal: SPACING.md,
  },
  
  remark: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.black,
    lineHeight: 1.6,
    textAlign: 'center',
    marginTop: SPACING.lg,
    paddingHorizontal: SPACING.md,
  },
});

const TitlePage = () => {
  const e = React.createElement;
  // Logo is in the public folder at the workspace root
  const logoPath = path.join(__dirname, '../../../../public/rfok_logo.png');
  
  // Convert mm to points (1mm = 2.8346 points)
  const pageSize = [PAGE.width * 2.8346, PAGE.height * 2.8346];
  
  return e(Document, null,
    e(Page, { size: pageSize, style: styles.page },
      e(View, { style: styles.container },
        e(Image, { 
          src: logoPath, 
          style: styles.logo 
        }),
        e(Text, { style: styles.title }, 'IGNITE 2026'),
        e(Text, { style: styles.subtitle }, 'WORKBOOK'),
        e(View, { style: styles.divider }),
        e(Text, { style: styles.author }, 'Created by DrFok'),
        e(Text, { style: styles.description },
          'Your Complete Reflection, Vision, Theme & Action Guide'
        ),
        e(Text, { style: styles.description },
          'Inspired by Ali Abdaal\'s SPARK 2026 Productivity Summit and related planning content.'
        ),
        e(View, { style: styles.divider }),
        e(Text, { style: styles.remark },
          'This workbook is a recreation of the Spark 2026 Productivity Summit materials for those of us who missed the seminar, based on what I could find on the internet. It\'s designed to help you reflect on 2025, clarify your vision for 2026, and build systems that support sustainable action.'
        ),
        e(Text, { style: styles.remark },
          'Use this workbook to guide your reflection, set your annual theme, design experiments, and create your personal operating system for the year ahead.'
        )
      )
    )
  );
};

module.exports = { default: TitlePage };
