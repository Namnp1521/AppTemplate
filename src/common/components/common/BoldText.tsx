import React, {useEffect, useState} from 'react';
import {Text} from '.';
import {CommonUtilities} from '@utils';
import {Colors, Theme} from '@constants';
import {Weight} from './Text';

export interface BoldTextProps {
  content: string;
  center?: boolean;
  italic?: boolean;
  color?: string;
  size?: number;
  lineHeight?: number;
  entry?: string;
  weight?: Weight;
  textColor?: string;
}

export default function BoldText(props: BoldTextProps) {
  const {
    content = '',
    center = true,
    color = Colors.primary100,
    size = 16,
    lineHeight = 22,
    italic,
    entry = '',
    weight = '400',
    textColor = Colors.white,
  } = props;

  const [text, setText] = useState(['', '', '']);

  useEffect(() => {
    setText(CommonUtilities.convertBoldText(content));
  }, [content]);

  /** render */
  const renderHightlight = (contentPart: string) => {
    const partList = CommonUtilities.splitHighlight(contentPart, entry);
    return (
      <>
        {partList.map((part, index) => {
          if (part.isHighlight) {
            return (
              <Text
                key={`renderHightlightPart2_${index}`}
                size={size}
                weight="bold"
                sx={[
                  {color: color},
                  italic && {
                    fontFamily: Theme.fontFamily.PoppinsBoldItalic,
                  },
                ]}>
                {part.text}
              </Text>
            );
          }
          return part.text;
        })}
      </>
    );
  };

  return (
    <Text
      size={size}
      italic={italic}
      weight={weight}
      center={center}
      height={lineHeight}
      sx={{
        color: textColor,
      }}>
      {renderHightlight(text[0])}
      <Text
        size={size}
        weight="bold"
        sx={[
          {color: color},
          italic && {
            fontFamily: Theme.fontFamily.PoppinsBoldItalic,
          },
        ]}>
        {text[1].trim()}
      </Text>
      {renderHightlight(text[2])}
    </Text>
  );
}
