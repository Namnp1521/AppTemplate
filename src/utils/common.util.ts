import {
  Colors,
  EnglishMessageCharRegex,
  FullSpecialCharRegex,
  SpecialCharRegex,
} from '@constants';
import {decode} from 'html-entities';
import _ from 'lodash';
import {Platform, Vibration} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import FastImage from 'react-native-fast-image';
import {v4 as uuidv4} from 'uuid';

/**
 * @const CommonUtilities
 * @description CommonUtilities
 */
const CommonUtilities = {
  sleep(sec: number) {
    return new Promise(resolve => setTimeout(resolve, sec));
  },

  getNameFromEmail(email: string | null) {
    if (!email) return "Zalu's User";
    let i = email.indexOf('@');
    if (i === -1) return email;
    return email.substring(0, i);
  },

  getNameFromFullName(fullName: string | null) {
    if (!fullName) return 'Friend';
    return fullName.split(' ')[0];
  },

  removeChar(str: string, char: string) {
    let lastId = str.lastIndexOf(char);
    let newStr = str.split('');
    newStr.splice(lastId, 1);
    return newStr.join('');
  },

  randomString() {
    return Math.random().toString(36).slice(2);
  },

  convertBoldText(content: string): string[] {
    const res = [content, '', ''];
    const startLocation = content.indexOf('**');

    if (startLocation !== -1) {
      const endLocation =
        startLocation + 2 + content.slice(startLocation + 2).indexOf('**');

      if (endLocation !== startLocation + 2 - 1) {
        res[0] = content.substring(0, startLocation);
        res[1] = content.substring(startLocation + 2, endLocation);
        res[2] = content.substring(endLocation + 2).replaceAll('**', '');
      } else {
        res[0] = content.replaceAll('**', '');
      }
    }

    return res;
  },

  splitHighlight(
    content: string,
    entry: string,
  ): {text: string; isHighlight: boolean}[] {
    const res: {text: string; isHighlight: boolean}[] = [];

    if (!entry) {
      res.push({
        text: content,
        isHighlight: false,
      });
    } else {
      const notHightlightList = content.split(entry);
      for (let i = 0; i < notHightlightList.length; i++) {
        res.push({
          text: notHightlightList[i],
          isHighlight: false,
        });
        if (i < notHightlightList.length - 1) {
          res.push({
            text: entry,
            isHighlight: true,
          });
        }
      }
    }

    return res;
  },

  getHighlightFirst(content: string): [string, string, string] {
    const res: [string, string, string] = [content, '', ''];
    const startLocation = content.indexOf('**');
    if (startLocation !== -1) {
      const endLocation =
        startLocation + 2 + content.slice(startLocation + 2).indexOf('**');

      if (endLocation !== startLocation + 2 - 1) {
        res[0] = content.substring(0, startLocation);
        res[1] = content.substring(startLocation + 2, endLocation);
        res[2] = content.substring(endLocation + 2);
      } else {
        res[0] = content;
        res[2] = content.substring(startLocation + 2);
      }
    }
    return res;
  },

  splitHighlightByStar(
    content: string,
  ): {text: string; isHighlight: boolean}[] {
    const splitArray: {text: string; isHighlight: boolean}[] = [];

    let text = content;
    while (text.includes('**')) {
      const splitText = this.getHighlightFirst(text);
      splitArray.push({
        text: splitText[0],
        isHighlight: false,
      });
      splitArray.push({
        text: splitText[1],
        isHighlight: true,
      });
      text = splitText[2];
    }
    splitArray.push({
      text: text,
      isHighlight: false,
    });

    return splitArray;
  },

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  getIosShadow() {
    const iosShadow = {
      shadowColor: Colors.black,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.1,
      shadowRadius: 21.0,
    };

    return iosShadow;
  },

  async preloadImages(urls: string[]) {
    FastImage.preload(urls.map(url => ({uri: url})));
  },

  calcPercent(progress: number, total: number) {
    if (total === 0) return '0%';
    return Math.min(Math.round((progress / total) * 100), 100) + '%';
  },

  numberTo1K(value?: number) {
    if (!value) return 0;
    if (value < 1000) return value + '';
    return Math.round(value / 1000) + 'K';
  },

  shuffleArray<T>(array: T[]) {
    return _.shuffle(array);
  },

  shuffleArrayExceptTheLast<T>(array: T[]) {
    if (array.length > 0) {
      return _.shuffle(array.slice(0, array.length - 1)).concat([
        array[array.length - 1],
      ]);
    }
    return array;
  },

  isIntArrayEqual(arr1: number[] | undefined, arr2: number[] | undefined) {
    if (!arr1 || !arr2) return false;

    const array1 = arr1.slice().sort();
    const array2 = arr2.slice().sort();
    return (
      array1.length == array2.length &&
      array1.every(function (element, index) {
        return element === array2[index];
      })
    );
  },

  isStringArrayEqual(arr1: string[] | undefined, arr2: string[] | undefined) {
    if (!arr1 || !arr2) return false;

    const array1 = arr1.slice().sort();
    const array2 = arr2.slice().sort();
    return (
      array1.length == array2.length &&
      array1.every(function (element, index) {
        return (
          element.toLocaleLowerCase() === array2[index].toLocaleLowerCase()
        );
      })
    );
  },

  getRandomWord(sentence: string, ignore: string) {
    const words = sentence.split(' ');
    const filterWords = words.filter(
      word =>
        word.trim().toLocaleLowerCase() !== ignore.trim().toLocaleLowerCase(),
    );

    return filterWords[Math.round(Math.random() * (filterWords.length - 1))];
  },

  async getDeviceId() {
    return await deviceInfoModule.getUniqueId();
  },

  getTimezone() {
    let date = new Date();
    return date.getTimezoneOffset() / -60;
  },

  convertStringToByteArray(str: string) {
    var bytes: string[] = [];
    for (let i = 0; i < str.length; i++) {
      bytes.push(str.charCodeAt(i).toString(16));
    }
    return bytes;
  },

  convertStringToNumber(str: string) {
    try {
      return parseFloat(str);
    } catch (error) {
      return 0;
    }
  },

  vibrate() {
    Platform.OS === 'ios'
      ? Vibration.vibrate([30, 30])
      : Vibration.vibrate([30, 30]);
  },

  removeSpecialChar(text: string) {
    return text.split(SpecialCharRegex).join('');
  },

  removeFullSpecialChar(text: string) {
    return text.split(FullSpecialCharRegex).join('');
  },

  splitBySpecialChar(text: string) {
    return (
      text
        .trim()
        .split(SpecialCharRegex)
        .filter(data => !!data) || []
    );
  },

  formatMoneyNumber(number: number, currencyCode: string, toFixed?: number) {
    let money = number;

    if (currencyCode === 'VND') {
      money = number > 1000 ? Math.ceil(number / 1000) * 1000 : number;
    }

    if (toFixed === undefined) {
      return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (Math.floor(money * Math.pow(10, toFixed)) / Math.pow(10, toFixed))
      .toFixed(toFixed)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  strToNum(strNum: string, defaultNum: number) {
    return Number.isNaN(strNum) ? defaultNum : parseInt(strNum);
  },

  getRandomFromArray<T>(arr: Array<T>, numIndex: number) {
    return _.shuffle(_.cloneDeep(arr)).slice(0, numIndex);
  },

  replaceSnipet(content: string | undefined, snipet: string | undefined) {
    if (!content) return '';
    if (!snipet) return content;
    return content.replace(snipet.replaceAll('**', ''), snipet);
  },

  sanitizeText(value: string) {
    return value.replace(/[`~!@#$%^&*()_|+=?;:",.<>\{\}\[\]\\\/]/g, ' ');
  },

  removeEmptyStr(content: string[]) {
    return content.filter(data => !!data);
  },

  removeStrFromArr(content: string[], filterStr: string) {
    return content.filter(data => data !== filterStr);
  },

  addStrToArr(content: string[], filterStr: string) {
    return _.uniq(content.concat(filterStr));
  },

  formatLongNumber(num: number): string {
    return Math.abs(num) > 999
      ? (Math.abs(num) / 1000).toFixed(1) + 'k'
      : Math.abs(num) + '';
  },

  formatEntry(entry = '') {
    let res = entry.trim();

    const splitRes = res.split('/').map(part => part.trim());

    return splitRes.join(' / ');
  },

  isJapaneseType(language: string) {
    return ['ja', 'zh', 'zh-cn', 'ko-kr'].includes(language);
  },

  getWords: (text: string, language?: string) => {
    if (!text) return [];

    return CommonUtilities.isJapaneseType(language || '')
      ? text.trim().split('')
      : text.trim().split(/\s+/);
  },

  match2Array(array1: string[], array2: string[]) {
    return array1.filter(element => array2.includes(element));
  },

  formatTranscriptText(text: string, hlWord: string) {
    if (!text) return '';

    // co highlight roi thi thoi
    if (text.includes('**')) return text;

    let res = decode(
      text.trim().replaceAll('\n', ' ').replace(/ +/g, ' '),
    ).toLowerCase();

    const word = hlWord.trim().replace(/ +/g, ' ').toLowerCase();
    if (word) {
      res = res.replaceAll(word, `**${word}**`);
    }

    return res;
  },

  generateId() {
    return uuidv4();
  },

  getOnlyEnglishChar(word: string) {
    return word.toLowerCase().replace(/[^a-z']/g, '');
  },

  addSpaceToText(text: string, maxLength: number) {
    if (maxLength <= text.length) return text;

    return text + new Array(maxLength - text.length).fill(' ').join('');
  },

  getValidMessage(value: string, language?: string) {
    if (language !== 'en-us') {
      return value.replace(/^\s+|\s+$/g, '').trim();
    }

    return value.split(EnglishMessageCharRegex).join('').trim();
  },

  getYoutubeIdByURL(videoUrl: string) {
    // http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index
    // https://www.youtube.com/user/hambone224#p/a/u/1/0zM3nApSvMg
    // http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0
    // http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s
    // http://www.youtube.com/embed/0zM3nApSvMg?rel=0
    // http://www.youtube.com/watch?v=0zM3nApSvMg
    // http://youtu.be/0zM3nApSvMg
    // https://youtube.com/shorts/0dPkkQeRwTI?feature=share
    // https://youtube.com/shorts/0dPkkQeRwTI
    let regex =
      /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
    return regex.exec(videoUrl)?.[3] || '';
  },

  getYoutubeThumbnalByURL(videoUrl: string) {
    let videoId = CommonUtilities.getYoutubeIdByURL(videoUrl || '');
    return videoId ? `http://img.youtube.com/vi/${videoId}/0.jpg` : '';
  },

  fixNumber(value: number) {
    return value.toFixed(1);
  },

  capitalizeFirstLetter(val: string) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  },
};

export default CommonUtilities;
