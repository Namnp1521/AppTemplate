import React, {useEffect, useState} from 'react';
import {Block, Text} from '.';
import {CommonUtilities} from '@utils';
import {Colors, Theme} from '@constants';
import {Weight} from './Text';
import {StyleProp, TextStyle} from 'react-native';

export interface IBoldByStarTextProps {
  content: string;
  center?: boolean;
  italic?: boolean;
  color?: string;
  size?: number;
  lineHeight?: number;
  weight?: Weight;
  textColor?: string;
  adjustsFontSizeToFit?: boolean;
  numberOfLines?: number | undefined;
  linearColor?: {
    colors: string[];
    bgcolor: string;
    angle: number;
    angleCenter: {
      x: number;
      y: number;
    };
  };
  sx?: StyleProp<TextStyle>; // customStyle
}

export default function BoldByStarText(props: IBoldByStarTextProps) {
  const {
    content = '',
    center = false,
    color = Colors.primary100,
    size = 14,
    lineHeight = 21,
    italic,
    weight = '400',
    textColor = Colors.white,
    adjustsFontSizeToFit = false,
    numberOfLines,
    sx,
    linearColor,
  } = props;

  const [splitTextList, setSplitTextList] = useState<
    {text: string; isHighlight: boolean}[]
  >([]);

  useEffect(() => {
    setSplitTextList(CommonUtilities.splitHighlightByStar(content));
  }, [content]);

  /** render */

  return (
    <Text
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      size={size}
      italic={italic}
      weight={weight}
      center={center}
      height={lineHeight}
      numberOfLines={numberOfLines}
      sx={[
        {
          color: textColor,
        },
        sx,
      ]}>
      {splitTextList.map((item, index) => {
        return (
          <React.Fragment key={`hl_${index}`}>
            {!item.isHighlight ? (
              item.text
            ) : linearColor ? (
              <Block mb={-1} mr={italic ? -5 : 0}>
                {/* <GradientText
                  size={size}
                  weight="bold"
                  sx={[
                    {
                      fontFamily: Theme.fontFamily.PoppinsBold,
                    },
                    italic && {
                      fontFamily: Theme.fontFamily.PoppinsBoldItalic,
                    },
                  ]}
                  angle={linearColor.angle}
                  angleCenter={linearColor.angleCenter}
                  fontFamily={Theme.fontFamily.MerriweatherBold}
                  bgcolor={linearColor.bgcolor}
                  colors={linearColor.colors}>
                  {item.text}
                </GradientText> */}
              </Block>
            ) : (
              <Text
                size={size}
                weight="bold"
                center={center}
                sx={[
                  {color: color},
                  italic && {
                    fontFamily: Theme.fontFamily.PoppinsBoldItalic,
                  },
                ]}>
                {item.text}
              </Text>
            )}
          </React.Fragment>
        );
      })}
    </Text>
  );
}
