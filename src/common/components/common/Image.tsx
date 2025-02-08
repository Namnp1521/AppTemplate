import React, {useState} from 'react';
import {DimensionValue, StyleProp} from 'react-native';
import FastImage, {
  FastImageProps,
  ImageStyle,
  Source,
} from 'react-native-fast-image';
import {Colors} from '@constants';

export type ResizeMode = 'contain' | 'cover' | 'stretch' | 'center';

export interface ImageProps extends FastImageProps {
  source: Source | number;
  width?: DimensionValue | number;
  height?: DimensionValue | number;
  full?: boolean;
  stretch?: boolean;
  radius?: number;
  resizeMode?: ResizeMode;
  backgroundColor?: string;
  style?: StyleProp<ImageStyle>;
}

export default function Image(props: ImageProps) {
  const {
    width,
    height,
    style,
    source,
    resizeMode,
    full,
    radius,
    backgroundColor,
    onLoadEnd,
    stretch,
  } = props;

  const imageStyles: StyleProp<ImageStyle>[] = [
    !!width && {width},
    !!height && {height},
    full && {
      flex: 1,
    },
    !!radius && {borderRadius: radius},
    {backgroundColor: backgroundColor || Colors.transparent},
    style,
  ];

  const [isFallback, setFallback] = useState(false);

  return (
    <FastImage
      style={imageStyles}
      source={source}
      resizeMode={stretch ? 'stretch' : resizeMode || 'cover'}
      onLoadEnd={onLoadEnd}
      // https://github.com/DylanVann/react-native-fast-image/issues/710#issuecomment-1148866993
      onError={() => setFallback(true)}
      fallback={isFallback}
    />
  );
}
