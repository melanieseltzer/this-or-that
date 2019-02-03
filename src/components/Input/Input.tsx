import React, { forwardRef } from 'react';

type Ref = HTMLInputElement;

export const Input = forwardRef<Ref>((props, ref) => (
  <input type="text" ref={ref} />
));

export default Input;
