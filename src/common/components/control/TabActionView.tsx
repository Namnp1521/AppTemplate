import {Colors} from '@constants';
import _ from 'lodash';
import React, {useEffect, useRef} from 'react';
import {ScrollView} from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Block, ScalePressable, Text} from '../common';

export interface TabActionViewProps {
  curTab: number;
  onChangeTab: (value: number) => void;
  tabs: string[];
  color?: string;
  isNoPadding?: boolean;
}

const TabActionView = (props: TabActionViewProps) => {
  /** props */
  const {curTab, onChangeTab, tabs, color, isNoPadding} = props;

  const {scrollRef, onLayoutTab, underscoreAnimatedStyle} = useTab(
    curTab,
    tabs.length,
  );

  /** render */
  return (
    <Block height={48} flex={1} pr={!!isNoPadding ? 0 : 10}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Block flex row center>
          {tabs.map((tab, index) => (
            <ScalePressable
              key={`tab_${tab}`}
              onTouchStart={() => {
                onChangeTab(index);
              }}>
              <Block
                onLayout={e => onLayoutTab(index, e.nativeEvent.layout.width)}
                pr={index < tabs.length - 1 ? 16 : 0}>
                <Block height={1}>
                  {/* fix cứng with của tab */}
                  <Text size={16} bold sx={{color: Colors.transparent}}>
                    {tab}
                  </Text>
                </Block>
                <Text
                  size={16}
                  bold={curTab === index}
                  sx={{
                    color:
                      curTab !== index
                        ? Colors.grey
                        : color || Colors.secondary,
                  }}>
                  {tab}
                </Text>
              </Block>
            </ScalePressable>
          ))}

          <Block
            animated
            absolute
            sx={[
              {
                bottom: 0,
              },
              underscoreAnimatedStyle,
            ]}
            width={24}
            height={4}
            radius={4}
            bgcolor={color || Colors.secondary}
          />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default TabActionView;

const useTab = (curTab: number, maxTab: number) => {
  const firstTimeRef = useRef<boolean>(false);
  const scrollRef = useRef<any>(null);
  // const widthTabRef = useRef<[number, number, number]>([0, 0, 0]);
  const widthTabRef = useRef<[number, number]>([0, 0]);

  /** animated */
  const sharredValue = useSharedValue(0);
  const underscoreAnimatedStyle = useAnimatedStyle(() => ({
    left: withTiming(sharredValue.value),
  }));

  /** effect */
  useEffect(() => {
    scrollToIndex(curTab);

    if (!firstTimeRef.current) {
      setTimeout(() => {
        scrollToIndex(curTab);
        firstTimeRef.current = true;
      }, 300);
    }
  }, [curTab]);

  /** callback */
  const scrollToIndex = (index: number) => {
    if (scrollRef.current?.scrollTo) {
      sharredValue.value = _.sum(widthTabRef.current.slice(0, index));

      if (index === maxTab - 1) {
        scrollRef.current?.scrollToEnd();
        return;
      }
      scrollRef.current?.scrollTo({
        x: 0,
        y: _.sum(widthTabRef.current.slice(0, index)),
        animated: true,
      });
    }
  };

  const onLayoutTab = (index: number, width: number) => {
    widthTabRef.current[index] = width;
  };

  return {
    scrollRef,
    scrollToIndex,
    widthTabRef,
    onLayoutTab,
    underscoreAnimatedStyle,
  };
};
