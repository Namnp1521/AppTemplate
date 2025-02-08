import Colors from './colors.constant';

const sizes = {
  // global sizes
  base: 14,
  font: 14,
  radius: 12,
  padding: 10,

  // font sizes
  h1: 35,
  h2: 20,
  h3: 18,
  h4: 16,
  title: 16,
  header: 20,
  body: 16,
  caption: 14,
  caption2: 14,
  small: 12,
  button: 16,
};

const fontFamily = {
  MerriweatherBlack: 'Merriweather-Black',
  MerriweatherBold: 'Merriweather-Bold',
  MerriweatherLight: 'Merriweather-Light',
  MerriweatherRegular: 'Merriweather-Regular',
  PoppinsBlack: 'Poppins-ExtraBold',
  PoppinsBold: 'Poppins-Bold',
  PoppinsExtraBold: 'Poppins-ExtraBold',
  PoppinsExtraLight: 'Poppins-Light',
  PoppinsLight: 'Poppins-Light',
  PoppinsMedium: 'Poppins-Medium',
  PoppinsRegular: 'Poppins-Regular',
  PoppinsSemiBold: 'Poppins-SemiBold',
  PoppinsThin: 'Poppins-Light',
  PoppinsItalic: 'Poppins-Italic',
  PoppinsBoldItalic: 'Poppins-BoldItalic',
};

const fonts = {
  h1: {
    fontSize: sizes.h1,
    fontFamily: fontFamily.PoppinsBlack,
  },
  h2: {
    fontSize: sizes.h2,
    fontFamily: fontFamily.PoppinsExtraBold,
  },
  h3: {
    fontSize: sizes.h3,
    fontFamily: fontFamily.PoppinsSemiBold,
  },
  h4: {
    fontSize: sizes.h4,
    fontFamily: fontFamily.PoppinsBold,
  },
  title: {
    fontSize: sizes.title,
    fontFamily: fontFamily.PoppinsSemiBold,
  },
  header: {
    fontSize: sizes.header,
    fontFamily: fontFamily.PoppinsMedium,
  },
  body: {
    fontSize: sizes.body,
    fontFamily: fontFamily.PoppinsSemiBold,
  },
  caption: {
    fontSize: sizes.caption,
    fontFamily: fontFamily.PoppinsSemiBold,
  },
  caption2: {
    fontSize: sizes.caption,
    fontFamily: fontFamily.PoppinsRegular,
  },
  text: {
    fontSize: sizes.font,
    fontFamily: fontFamily.PoppinsRegular,
    color: Colors.font,
  },
  small: {
    fontSize: sizes.small,
    fontFamily: fontFamily.PoppinsLight,
  },
  button: {
    fontSize: sizes.button,
    fontFamily: fontFamily.PoppinsMedium,
  },
};

export default {sizes, fonts, fontFamily};
