import React from 'react';

export interface FooterProps {
  components?: any[];
  children?: any;
}

export default function ComposeProviders(props: FooterProps) {
  const {components, children} = props;

  return components?.reduceRight(
    (memo, Component) => <Component>{memo}</Component>,
    children,
  );
}
