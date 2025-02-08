import {Colors, Images, Theme, WIDTH_SCREEN} from '@constants';
import {MomentUtilities} from '@utils';
import React, {useEffect, useState} from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Calendar, DateData} from 'react-native-calendars';
import CalendarHeader from 'react-native-calendars/src/calendar/header';
import {Block, SVGImage, ScaleButton, Text} from '../common';

export interface IDateSelection {
  onChangeDate: (date: Date) => void;
  defaultValue: Date | null;
  disabled?: boolean;
  firstUIDisabled?: boolean;
  title?: string;
  colorTitle?: any;
}

export default function DateSelection(props: IDateSelection) {
  const {
    disabled,
    firstUIDisabled,
    onChangeDate,
    defaultValue,
    title,
    colorTitle,
  } = props;

  const minDate = MomentUtilities.addDayFromDate(new Date(), 0);

  /** state */
  const [firstUI, setFirstUId] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(MomentUtilities.formatDateYYYYMMDD(minDate));

  /** effect */
  useEffect(() => {
    if (firstUIDisabled) {
      setFirstUId(true);
    }
  }, [firstUIDisabled]);

  useEffect(() => {
    if (defaultValue) {
      setDate(MomentUtilities.formatDateYYYYMMDD(defaultValue));
    }
  }, [defaultValue]);

  // useEffect(() => {
  //   changeDateCallback();
  // }, [date]);

  /** callback */
  const showCalendar = () => {
    setFirstUId(false);
    setOpen(true);
  };
  const hideCalendar = () => setOpen(false);

  const onDayPress = (day: DateData) => {
    setDate(day.dateString);
  };

  const changeDateCallback = () => {
    if (date) {
      const selectedDate = new Date(date);
      const dateFull = new Date();
      dateFull.setDate(selectedDate.getDate());
      dateFull.setMonth(selectedDate.getMonth());
      dateFull.setFullYear(selectedDate.getFullYear());

      onChangeDate(dateFull);
    }
  };

  const onSubmit = () => {
    changeDateCallback();
    setOpen(false);
  };

  /** render */
  return (
    <Block
      padding={[4, 8]}
      bgcolor={disabled || firstUI ? Colors.transparent : Colors.dark100}
      radius={8}
      sx={{
        borderColor: disabled || firstUI ? Colors.grey : Colors.dark100,
        borderWidth: 1,
      }}>
      <Block>
        <TouchableOpacity disabled={disabled} onPress={showCalendar}>
          <Block row center middle>
            <Block mr={7}>
              {/* <SVGImage
                source={Images.ICON.CALENDAR}
                width={20}
                height={20}
                color={disabled || firstUI ? Colors.grey : Colors.white}
              /> */}
            </Block>
            <Text
              sx={{color: disabled || firstUI ? Colors.grey : Colors.white}}>
              {date
                ? MomentUtilities.formatDateDDMMMYYYY(
                    MomentUtilities.parseDateYYYYMMDD(date),
                  )
                : '-'}
            </Text>
          </Block>
        </TouchableOpacity>
      </Block>
      <Modal
        visible={open}
        animationType="fade"
        transparent
        statusBarTranslucent>
        <TouchableWithoutFeedback
        // onPress={hideCalendar}
        >
          <View style={styles.modalContainer}>
            <Block flex center middle bgcolor={Colors.transparent50}>
              <Block>
                <Block
                  bgcolor={Colors.dark100}
                  pt={16}
                  pb={16}
                  radius={16}
                  overflow>
                  {title && (
                    <Block center middle>
                      <Text
                        bold
                        sx={{color: colorTitle || Colors.linear_bg1}}
                        transform="uppercase">
                        {title}
                      </Text>
                    </Block>
                  )}
                  <Calendar
                    initialDate={
                      defaultValue
                        ? MomentUtilities.formatDateYYYYMMDD(defaultValue)
                        : undefined
                    }
                    pastScrollRange={1}
                    futureScrollRange={1}
                    customHeader={CalendarHeader}
                    markingType="period"
                    minDate={MomentUtilities.formatDateYYYYMMDD(minDate)}
                    enableSwipeMonths
                    style={styles.calendar}
                    onDayPress={onDayPress}
                    markedDates={{
                      [date]: {
                        color: Colors.primary,
                        textColor: Colors.white,
                      },
                      [MomentUtilities.formatDateYYYYMMDD(new Date())]: {
                        textColor: Colors.primary,
                      },
                    }}
                    renderArrow={direction => (
                      <Block
                        sx={{
                          transform: [
                            {
                              rotate: direction === 'right' ? '0deg' : '180deg',
                            },
                          ],
                        }}>
                        {/* <SVGImage
                          source={Images.ICON.CHEVRON_RIGHT}
                          width={24}
                          height={24}
                          color={Colors.white}
                        /> */}
                      </Block>
                    )}
                    theme={{
                      textDayHeaderFontFamily: Theme.fontFamily.PoppinsRegular,
                      textDayHeaderFontSize: 14,
                      textMonthFontFamily: Theme.fontFamily.PoppinsBold,
                      textMonthFontSize: 14,
                      textMonthFontWeight: 'bold',
                      textDayFontFamily: Theme.fontFamily.MerriweatherBold,
                      textDayFontSize: 18,
                      textInactiveColor: Colors.white40,
                      textDisabledColor: Colors.white40,
                      dayTextColor: Colors.white,
                      monthTextColor: Colors.white,
                      textSectionTitleColor: Colors.white,
                      textSectionTitleDisabledColor: Colors.white,
                      todayBackgroundColor: Colors.dark900,
                      calendarBackground: Colors.dark100,
                      weekVerticalMargin: 3,
                    }}
                  />
                  <Block mt={20} center>
                    <Block width={'100%'} padding={[0, 8]}>
                      <ScaleButton
                        bgcolor={Colors.dark900}
                        status="active"
                        onPress={onSubmit}>
                        <Text color="white">Submit</Text>
                      </ScaleButton>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </Block>
  );
}

const styles = StyleSheet.create({
  calendar: {
    width: WIDTH_SCREEN * 0.9,
    backgroundColor: Colors.dark100,
  },
  modalContainer: {
    flex: 1,
  },
});
