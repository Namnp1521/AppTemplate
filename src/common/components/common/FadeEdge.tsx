import {Colors} from '@constants';
import React from 'react';
import Background from './Background';

export interface FadeEdgeProps {
  height?: number;
  color?: string;
  secondColor?: string;
  locations?: number[];
  isTop?: boolean;
}

export default function FadeEdge(props: FadeEdgeProps) {
  const {
    height = 200,
    color = Colors.black100,
    secondColor = Colors.black50,
    locations,
    isTop,
  } = props;

  return (
    <Background
      linearColors={[Colors.transparent, Colors.transparent70, Colors.black]}
      angle={180}
      opacity={0.75}
    />
  );
}
