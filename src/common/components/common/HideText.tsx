import {Colors} from '@constants';
import {CommonUtilities} from '@utils';
import React, {useEffect, useState} from 'react';
import {Text, TypographyProps} from '.';

export interface HideTextProps extends TypographyProps {
  content: string;
  center?: boolean;
  italic?: boolean;
  size?: number;
  lineHeight?: number;
  entry?: string;
}

export default function HideText(props: HideTextProps) {
  const {
    content = '',
    center = true,
    color = Colors.secondary,
    size = 16,
    lineHeight = 22,
    italic,
    entry = '',
  } = props;

  const [splitTextList, setSplitTextList] = useState<
    {text: string; isHighlight: boolean}[]
  >([]);

  useEffect(() => {
    setSplitTextList(
      !content.includes('**') && !!entry
        ? CommonUtilities.splitHighlight(content, entry)
        : CommonUtilities.splitHighlightByStar(content),
    );
  }, [content, entry]);

  /** render */
  return (
    <Text
      size={size}
      italic={italic}
      center={center}
      height={lineHeight}
      {...props}>
      {splitTextList.map((item, index) => {
        return (
          <React.Fragment key={`hl_${index}`}>
            {!item.isHighlight ? (
              item.text
            ) : (
              <Text size={size} weight="bold" sx={[{color: color}]}>
                {Array(item.text.trim().length > 0 ? 5 : 0)
                  .fill('_')
                  .join('')}
              </Text>
            )}
          </React.Fragment>
        );
      })}
    </Text>
  );
}
