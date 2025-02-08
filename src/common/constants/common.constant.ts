import {Dimensions, Platform, StatusBar} from 'react-native';

const {width: WIDTH_SCREEN, height: HEIGHT_SCREEN} = Dimensions.get('window');
const {height: HEIGHT_SCREEN_ANDROID} = Dimensions.get('screen');

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

export const MAX_TODO_TITLE_LENGTH = 140;

export const isIPhoneX = () =>
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV
    ? (WIDTH_SCREEN === X_WIDTH && HEIGHT_SCREEN === X_HEIGHT) ||
      (WIDTH_SCREEN === XSMAX_WIDTH && HEIGHT_SCREEN === XSMAX_HEIGHT)
    : false;

export const STATUS_BAR_HEIGHT = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0,
});

// HEIGHT_SCREEN_ANDROID = HEIGHT_SCREEN + menu
export {HEIGHT_SCREEN, HEIGHT_SCREEN_ANDROID, WIDTH_SCREEN};

export const BOTTOM_BAR_HEIGHT = 80; //64
export const HEADER_HEIGHT = 56;

export const VietnamessNumberRegex =
  /^[0-9aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ\s]*$/;

export const SpaceRegex = /[ ]+/;
export const SpecialCharRegex = /[ ,.…!。！?"'’(/)-:;*&^（）%$#@~`]+/;
export const NotSpecialCharRegex2 = /[^ ,.…!。！?"'’(/)-:;*&^（）%$#@~`]+/;
export const NotSpecialCharRegex =
  /[0-9aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ]+/;
export const FullSpecialCharRegex = /[ `"'!。！@#$%^&*)(+=.,?/（）_’…:;~-]+/;
export const EnglishMessageCharRegex =
  /[^ 0-9aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ.,;:"'!?()]+/;

export const INTERVAL_CHECK_SNAPSHOT = 60000 * 15;

export const ROLE = {
  user: 'user',
  admin: 'admin',
};

export const LanguageList = [
  'vi',
  'en-us',
  'ja',
  'zh-cn',
  'ko-kr',
  'fr',
  'de',
  'it',
  'ru',
  'es',
];

export const CURRENCY: any = {
  ARS: '$',
  AUD: '$',
  BGN: 'лв',
  BRL: 'R$',
  CAD: '$',
  CHF: 'fr.',
  CLP: '$',
  CNY: '¥',
  COP: '$',
  CZK: 'Kč',
  DKK: 'kr.',
  EUR: '€',
  GBP: '£',
  HKD: 'HK$',
  HRK: 'kn',
  HUF: 'Ft',
  IDR: 'Rp',
  ILS: '₪',
  INR: '₹',
  ISK: 'kr.',
  JPY: '¥',
  KRW: '₩',
  MAD: '.د.م.',
  MXN: '$',
  MYR: 'RM',
  NOK: 'kr',
  NZD: '$',
  PHP: '₱',
  PLN: 'zł',
  RON: 'L',
  RUB: 'p.',
  SAR: '﷼',
  SEK: 'kr',
  SGD: '$',
  THB: '฿',
  TRY: '₺',
  TWD: '元',
  USD: '$',
  VND: '₫',
  ZAR: 'R',
};

export const ColorList = [
  '#ADEF6C',
  '#D287FF',
  '#6F94FF',
  '#EF8B6C',
  '#F8E21E',
  '#E3A607',
  '#FB5F46',
  '#88F3FA',
  '#5DA713',
  '#EBBDC8',
];
