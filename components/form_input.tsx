import React, { ChangeEvent, useState } from 'react';

import StyledInput from './styles/styled_input';
type PropsType = {
  id: string;
  name: string;
  type: string;
  required?: boolean;
  validationMessage?: string;
};

export default function InputField(props: PropsType) {
  const [error, setError] = useState(false);
  return (
    <StyledInput>
      <input
        type={props.type}
        required={props.required || false}
        name={props.id}
        onInvalid={(e: any) => {
          e.target.setCustomValidity(props.validationMessage);
        }}
        onInput={(e: any) => {
          e.target.setCustomValidity('');
        }}
      />
      <label htmlFor={props.id}>
        <span>{props.name}</span>
      </label>
    </StyledInput>
  );
}
