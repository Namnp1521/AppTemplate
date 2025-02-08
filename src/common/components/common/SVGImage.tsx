import React from 'react';
import Block from './Block';

export interface SVGImageProps {
  source: any;
  width: number;
  height: number;
  color?: string;
}

// https://github.com/software-mansion/react-native-reanimated/issues/593
export default class SVGImage extends React.Component<SVGImageProps> {
  render() {
    const {source, width, height, color} = this.props;

    if (!source) return <Block />;

    const Icon = source;
    return <Icon fill={color} width={width} height={height} />;
  }
}

// export default function SVGImage(props: SVGImageProps) {
//   const {source, width, height, color} = props;
//   const Icon = source;

//   return <Icon fill={color} width={width} height={height} />;
// }
