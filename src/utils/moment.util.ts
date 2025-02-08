import {Images} from '@constants';
import moment from 'moment';
import {getCurLocale} from './translation/i18n';

/**
 * @class MomentUtilities
 * @description convert date with moment js
 */
const MomentUtilities = {
  convertDateMessage: (date: Date) => {
    return moment(date).format('ddd, MMM DD, YYYY, h:mm A');
  },

  convertDateToMMMDDYYYY: (date: Date) => {
    return moment(date).format('MMM DD, YYYY');
  },

  convertDateTodddd: (date: Date) => {
    return moment(date).format('dddd, h:mm A');
  },

  convertDateToHMMA: (date: Date) => {
    return moment(date).format('h:mm A');
  },

  convertDateToYYYYMMDD: (date: Date) => {
    return moment(date).format('YYYYMMDD');
  },

  compare2Date: (date1: string, date2: string) => {
    return moment(date2).diff(moment(date1));
  },

  subtractCurrentSeconds: (number: number) => {
    return moment().subtract(number, 'seconds').format('LT');
  },

  getCurrentTime: () => {
    return moment().format('LT');
  },

  diffToday(date1: Date) {
    return moment(date1).diff(moment(this.getTodayUTCPlus0()), 'days', true);
  },

  diffDay(date1: Date, date2: Date) {
    return moment(date1).diff(moment(date2), 'days', true);
  },

  diffSeconds: (from: string, to: string) => {
    return moment(from, 'LT').diff(moment(to, 'LT'), 'seconds');
  },

  diffMinutes: (from: string, to: string) => {
    return moment(from, 'LT').diff(moment(to, 'LT'), 'minutes');
  },

  diffSecondsDate: (from: Date, to: Date) => {
    return moment(from, 'LT').diff(moment(to, 'LT'), 'seconds');
  },

  diffMinutesDate: (from: Date, to: Date) => {
    return moment(from, 'LT').diff(moment(to, 'LT'), 'minutes');
  },

  now: () => {
    return moment().toDate();
  },

  checkInToday: (date: Date) => {
    return moment(date).isSame(moment(), 'day');
  },

  checkInThisWeek: (date: Date) => {
    return moment(date).isSame(moment(), 'week');
  },

  compareDate(left: Date, right: Date) {
    return moment.utc(left).diff(moment.utc(right));
  },

  getTodayDDMMYYYY: () => {
    return moment().format('DD-MM-YYYY');
  },

  getTodayYYYYMMDD: () => {
    return moment().format('YYYY-MM-DD');
  },

  formatDateYYYYMMDD: (date: Date) => {
    return moment(date).format('YYYY-MM-DD');
  },

  parseDateYYYYMMDD: (date: string) => {
    return moment(date, 'YYYY-MM-DD').toDate();
  },

  formatDateDDMMMYYYY: (date: Date) => {
    return moment(date).format('DD MMM, YYYY');
  },

  formatDateDDMMYYYY: (date: Date) => {
    return moment(date).format('DD-MM-YYYY');
  },

  formatDateDDMMYYYY2: (date: Date) => {
    return moment(date).format('DD/MM/YYYY');
  },

  addDayFromDate: (date: Date, numDays: number) => {
    return moment(date).add(numDays, 'days').toDate();
  },

  addHoursFromDate: (date: Date, numDays: number) => {
    return moment(date).add(numDays, 'hours').toDate();
  },

  addDayFromToday: (numDays: number) => {
    return moment().add(numDays, 'days').toDate();
  },

  addMonthFromToday: (numDays: number) => {
    return moment().add(numDays, 'months').toDate();
  },

  addMonthFromDate: (date: Date, numM: number) => {
    return moment(date).add(numM, 'months').toDate();
  },

  addYearFromDate: (date: Date, numM: number) => {
    return moment(date).add(numM, 'years').toDate();
  },

  formatDateWeekName: (date: Date) => {
    return moment(date).format('dddd');
  },

  formatDatePrediction: (date: Date) => {
    return moment(date).format(
      getCurLocale() === 'vi' ? 'dddd, DD MMMM, YYYY' : 'dddd, MMMM DD, YYYY',
    );
  },

  formatDateddddDDMMMM: (date: Date) => {
    return moment(date).format(
      getCurLocale() === 'vi' ? 'dddd, DD MMMM' : 'dddd, MMMM DD',
    );
  },

  formatDateCramming: (date: Date, locale: 'vi' | 'en') => {
    return moment(date).format(
      locale === 'vi' ? 'dddd, DD MMMM, YYYY' : 'dddd, MMMM DD, YYYY',
    );
  },

  formatToday: () => {
    return moment(new Date()).format(
      getCurLocale() === 'vi' ? 'dddd, DD MMMM, YYYY' : 'dddd, MMMM DD, YYYY',
    );
  },

  formatToday2: () => {
    return moment(new Date()).format(
      getCurLocale() === 'vi' ? 'DD MMMM, YYYY' : 'MMMM DD, YYYY',
    );
  },

  formatToday3: () => {
    return moment(new Date()).format(
      getCurLocale() === 'vi' ? 'dddd, DD MMMM, YYYY' : 'dddd, MMMM DD, YYYY',
    );
  },

  formatDateMMMMDDYYYY: (date: Date | undefined | null) => {
    if (!date) return '';
    return moment(date).format(
      getCurLocale() === 'vi' ? 'DD MMMM, YYYY' : 'MMMM DD, YYYY',
    );
  },

  formatDateMMMMDoYYYY: (date: Date | undefined | null) => {
    if (!date) return '';
    return moment(date).format(
      getCurLocale() === 'vi' ? 'Do MMMM, YYYY' : 'MMMM Do, YYYY',
    );
  },

  formatDateMMMDoYYYY: (date: Date | undefined | null) => {
    if (!date) return '';
    return moment(date).format(
      getCurLocale() === 'vi' ? 'Do MMM, YYYY' : 'MMM Do, YYYY',
    );
  },

  formatDateMMMYYYY: (date: Date | undefined | null) => {
    if (!date) return '';
    return moment(date).format('MMMM YYYY');
  },

  formatDateMMMMDo: (date: Date | undefined | null) => {
    if (!date) return '';
    return moment(date).format(getCurLocale() === 'vi' ? 'Do MMMM' : 'MMMM Do');
  },

  formatDateMMMDo: (date: Date | undefined | null) => {
    if (!date) return '';
    return moment(date).format(getCurLocale() === 'vi' ? 'Do MMM' : 'MMM Do');
  },

  formatDateDo: (date: Date | undefined | null) => {
    if (!date) return '';
    return moment(date).format(getCurLocale() === 'vi' ? 'Do' : 'Do');
  },

  formatDatedd: (date: Date | undefined | null) => {
    if (!date) return '';
    return moment(date).format('dd');
  },

  formatDateD: (date: Date | undefined | null) => {
    if (!date) return '';
    return moment(date).format('D');
  },

  formatDateHHMM: (date: Date | undefined | null) => {
    if (!date) return '';
    return moment(date).format('HH:mm');
  },

  getToday: () => {
    const now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    return now;
  },

  getTodayUTCPlus0: () => {
    // thời gian hiện tại
    const now = new Date();
    // thời điểm hiện tại nếu user ở UTC+0
    const utcToday = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    // thời điểm đầu tiên trong ngày của utcToday
    const utcTodayFirstMoment = new Date(
      now.getTime() + now.getTimezoneOffset() * 60000,
    );
    utcTodayFirstMoment.setHours(0);
    utcTodayFirstMoment.setMinutes(0);
    utcTodayFirstMoment.setSeconds(0);
    utcTodayFirstMoment.setMilliseconds(0);
    // lấy thời điểm hiện tại trừ đi độ chênh lệch
    return new Date(
      now.getTime() - (utcToday.getTime() - utcTodayFirstMoment.getTime()),
    );

    // TODO: another way
    // const date = new Date();
    // date.setUTCHours(0);
    // date.setUTCMinutes(0);
    // date.setUTCSeconds(0);
    // date.setUTCMilliseconds(0);
  },

  getTomorrowUTCPlus0: () => {
    const today = MomentUtilities.getTodayUTCPlus0();
    today.setDate(today.getDate() + 1);
    return today;
  },

  getDateUTCPlus0: (numDays: number) => {
    const today = MomentUtilities.getTodayUTCPlus0();
    today.setDate(today.getDate() + numDays);
    return today;
  },

  getYesterdayUTCPlus0: () => {
    const today = MomentUtilities.getTodayUTCPlus0();
    today.setDate(today.getDate() - 1);
    return today;
  },

  isGreaterOrEqualToday: (date: Date | undefined) => {
    if (!date) return false;
    const diffDay = MomentUtilities.diffDay(
      date,
      MomentUtilities.getTodayUTCPlus0(),
    );
    return diffDay >= 0;
  },

  isLessOrEqualToday: (date: Date | undefined) => {
    if (!date) return false;
    const diffDay = MomentUtilities.diffDay(
      date,
      MomentUtilities.getTodayUTCPlus0(),
    );
    return diffDay < 1;
  },

  isLessToday: (date: Date | undefined) => {
    if (!date) return false;
    const diffDay = MomentUtilities.diffDay(
      date,
      MomentUtilities.getTodayUTCPlus0(),
    );
    return diffDay < 0;
  },

  isTodayUTCPlus0: (date: Date | undefined) => {
    if (!date) return false;
    const diffDay = MomentUtilities.diffDay(
      date,
      MomentUtilities.getTodayUTCPlus0(),
    );

    return diffDay >= 0 && diffDay < 1;
  },

  isYesterdayUTCPlus0: (date: Date | undefined) => {
    if (!date) return false;
    const diffDay = MomentUtilities.diffDay(
      MomentUtilities.getTodayUTCPlus0(),
      date,
    );
    return diffDay >= 0 && diffDay < 1;
  },

  isToday: (date: Date | undefined) => {
    if (!date) return false;
    const diffDay = MomentUtilities.diffDay(
      date,
      MomentUtilities.getStartMomentDate(new Date()),
    );
    return diffDay >= 0 && diffDay < 1;
  },

  isYesterday: (date: Date | undefined) => {
    if (!date) return false;
    const diffDay = MomentUtilities.diffDay(
      date,
      MomentUtilities.getStartMomentDate(new Date()),
    );
    return diffDay >= -1 && diffDay < 0;
  },

  isTomorrow: (date: Date | undefined) => {
    if (!date) return false;
    const diffDay = MomentUtilities.diffDay(
      date,
      MomentUtilities.getStartMomentDate(new Date()),
    );
    return diffDay >= 1 && diffDay < 2;
  },

  maxDate(left: Date | null, right: Date | null) {
    if (!left && !right) return null;

    if (!left) return right;

    if (!right) return left;

    return moment(left).isAfter(moment(right)) ? left : right;
  },

  convertDatetimeToUnix(date: Date) {
    return Math.floor(date.getTime() / 1000);
  },

  convertUnixToDatetime(unix: number) {
    return new Date(unix * 10000);
  },

  isSame: (date: Date | undefined, date2: Date | undefined) => {
    if (!date && !date2) return true;
    if (!date || !date2) return false;
    const diffDay = MomentUtilities.diffDay(date, date2);

    return diffDay >= 0 && diffDay < 1;
  },

  isSameMonth: (date: Date | undefined, date2: Date | undefined) => {
    if (!date && !date2) return true;
    if (!date || !date2) return false;

    return (
      date.getMonth() === date2.getMonth() &&
      date.getFullYear() === date2.getFullYear()
    );
  },

  isGreater: (date: Date | undefined, date2: Date | undefined) => {
    if (!date && !date2) return false;
    if (!date) return false;
    if (!date2) return true;
    const diffDay = MomentUtilities.diffDay(date, date2);
    return diffDay > 0;
  },

  getStartMomentDate: (date: Date) => {
    const preDate = moment(date).toDate();
    preDate.setHours(0);
    preDate.setMinutes(0);
    preDate.setSeconds(0);
    preDate.setMilliseconds(0);
    return preDate;
  },

  isLowerToday: (date: Date | undefined) => {
    if (!date) return false;
    return (
      moment(date).diff(
        moment(MomentUtilities.getStartMomentDate(new Date())),
      ) < 0
    );
  },

  getTimezone() {
    let date = new Date();
    const timezone = date.getTimezoneOffset() / -60;
    return timezone > 0 ? `+${timezone}` : `-${timezone}`;
  },

  getHelloByDate() {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good morning';
    }

    if (hour < 17) {
      return 'Good afternoon';
    }

    return 'Good evening';
  },

  getDaysInRow() {
    return new Array(6)
      .fill(0)
      .map((_, i) =>
        MomentUtilities.addDayFromDate(MomentUtilities.getToday(), i - 5),
      );
  },

  getWeeksInMonth(monthDate: Date) {
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();
    const weeks = [];
    let currentDate = new Date(year, month, 1);

    // Tìm ngày đầu tiên của tuần có chứa ngày thứ Hai đầu tiên
    while (currentDate.getDay() !== 1) {
      currentDate.setDate(currentDate.getDate() - 1);
    }

    // Lặp qua từng tuần bắt đầu từ thứ Hai đầu tiên của tháng
    while (
      currentDate.getMonth() === month ||
      MomentUtilities.addDayFromDate(currentDate, 6).getMonth() === month
    ) {
      const weekStart = new Date(currentDate);
      const weekEnd = MomentUtilities.addDayFromDate(currentDate, 6);

      weeks.push(
        new Array(7)
          .fill(0)
          .map((_, i) => MomentUtilities.addDayFromDate(weekStart, i)),
        //   {
        //   start: new Date(weekStart),
        //   end: new Date(weekEnd),
        // }
      );

      // Chuyển đến thứ Hai của tuần tiếp theo
      currentDate.setDate(currentDate.getDate() + 7);
    }

    return weeks;
  },
};

export default MomentUtilities;
