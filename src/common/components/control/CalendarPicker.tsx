import {Colors, Images, Theme, WIDTH_SCREEN} from '@constants';
import {MomentUtilities} from '@utils';
import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet} from 'react-native';
import {Calendar, DateData} from 'react-native-calendars';
import {Block, IconWrap, OpacityPressable, Text} from '../common';

export interface CalendarPickerProps {
  title?: string;
  required?: boolean;
  onChangeDate: (date: Date) => void;
  isTitleInBorder?: boolean;
}

export default function CalendarPicker(props: CalendarPickerProps) {
  const {title, required, onChangeDate, isTitleInBorder} = props;

  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(
    MomentUtilities.getTodayYYYYMMDD(),
  );

  useEffect(() => {
    onChangeDate(new Date(selectedDay));
  }, [selectedDay]);

  const onDayPress = (day: DateData) => {
    setSelectedDay(day.dateString);
    setOpen(false);
  };

  return (
    <Block>
      {!isTitleInBorder && (
        <Block row mb={8}>
          <Text size={14} sx={{color: Colors.black}}>
            {title}
            {'  '}
          </Text>
          {!!required && (
            <Block>
              <Text size={14} sx={{color: Colors.red}}>
                *
              </Text>
            </Block>
          )}
        </Block>
      )}
      <Block>
        <OpacityPressable onPress={() => setOpen(!open)}>
          <Block
            row
            center
            middle
            padding={isTitleInBorder ? [5, 10] : [15, 16]}
            radius={12}
            sx={{
              borderWidth: 1,
              borderColor: Colors.gray,
            }}>
            <Block flex>
              {isTitleInBorder && (
                <Block mb={2}>
                  <Text size={14} sx={{color: Colors.black}}>
                    {title}
                  </Text>
                </Block>
              )}
              <Text size={16} color={'primary'}>
                {MomentUtilities.formatDateDDMMYYYY(new Date(selectedDay))}
              </Text>
            </Block>
            <Block>
              <IconWrap
                icon={Images.ICON.Calendar}
                size={18}
                color={Colors.black}
              />
            </Block>
          </Block>
        </OpacityPressable>
      </Block>
      <Modal visible={open} transparent statusBarTranslucent>
        <Block
          flex
          center
          middle
          sx={{backgroundColor: Colors.backgroundModal}}>
          <Calendar
            // maxDate={MomentUtilities.getTodayYYYYMMDD()}
            enableSwipeMonths
            style={styles.calendar}
            onDayPress={onDayPress}
            markedDates={{
              [selectedDay]: {
                selected: true,
                marked: true,
                disableTouchEvent: true,
              },
            }}
            theme={{
              textDayHeaderFontFamily: Theme.fontFamily.PoppinsRegular,
              textDayHeaderFontSize: 14,
              textMonthFontFamily: Theme.fontFamily.PoppinsBold,
              textMonthFontSize: 14,
              textMonthFontWeight: 'bold',
              textDayFontFamily: Theme.fontFamily.PoppinsMedium,
              textDayFontSize: 18,
              textInactiveColor: Colors.white40,
              textDisabledColor: Colors.white40,
              dayTextColor: Colors.white,
              monthTextColor: Colors.white,
              textSectionTitleColor: Colors.white,
              textSectionTitleDisabledColor: Colors.white,
              todayBackgroundColor: Colors.primary,
              calendarBackground: Colors.primary,
              weekVerticalMargin: 3,
              arrowColor: Colors.white,
              todayDotColor: Colors.white,
              todayTextColor: Colors.green,
              selectedDayTextColor: Colors.primary,
              selectedDayBackgroundColor: Colors.white,
            }}
          />
        </Block>
      </Modal>
    </Block>
  );
}

const styles = StyleSheet.create({
  calendar: {
    width: WIDTH_SCREEN * 0.9,
    height: 400,
  },
});
