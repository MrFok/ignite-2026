const { Font, StyleSheet } = require('@react-pdf/renderer');
const path = require('path');

// ============================================
// FONT REGISTRATION
// ============================================
// Register GT Pressura Mono from local TTF file

const fontPath = path.join(__dirname, '../../assets/fonts/GTPressuraMono-Regular.ttf');

Font.register({
  family: 'GTPressuraMono',
  src: fontPath,
});

// ============================================
// THEME CONSTANTS
// ============================================

// Remarkable 2 dimensions: 157 x 209 mm
const PAGE = {
  width: 157, // mm
  height: 209, // mm
  marginTop: 12,
  marginBottom: 12,
  marginLeft: 10,
  marginRight: 10,
};

const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  gray: '#888888',
  lightGray: '#CCCCCC',
  veryLightGray: '#E8E8E8',
  dotColor: '#BBBBBB',
};

const TYPOGRAPHY = {
  // Use GT Pressura Mono as primary font
  fontFamily: 'GTPressuraMono',
  
  sizes: {
    xs: 6,
    sm: 7,
    base: 8,
    md: 9,
    lg: 11,
    xl: 14,
    xxl: 18,
  },
};

const SPACING = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
};

// ============================================
// BASE STYLES
// ============================================

const baseStyles = StyleSheet.create({
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
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
    paddingBottom: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black,
  },
  
  headerBracket: {
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: 'bold',
  },
  
  headerTitle: {
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  
  section: {
    marginBottom: SPACING.md,
  },
  
  sectionTitle: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
    textTransform: 'uppercase',
  },
  
  label: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
  
  prompt: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.gray,
    marginBottom: SPACING.xs,
  },
  
  text: {
    fontSize: TYPOGRAPHY.sizes.base,
    lineHeight: 1.4,
  },
  
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    marginVertical: SPACING.md,
  },
  
  doubleDivider: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.black,
    marginVertical: SPACING.lg,
  },
  
  footer: {
    position: 'absolute',
    bottom: PAGE.marginBottom,
    left: PAGE.marginLeft,
    right: PAGE.marginRight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: TYPOGRAPHY.sizes.xs,
    color: COLORS.gray,
  },
});

module.exports = {
  PAGE,
  COLORS,
  TYPOGRAPHY,
  SPACING,
  baseStyles,
};
