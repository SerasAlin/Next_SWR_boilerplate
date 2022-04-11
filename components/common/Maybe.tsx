import React from 'react';

interface MaybePropsType {
  test: boolean,
  children: any
}
const Maybe = ({ test, children }: MaybePropsType) => <>{test && children}</>;

export default Maybe;
