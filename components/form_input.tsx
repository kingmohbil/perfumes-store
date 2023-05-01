import React, { ChangeEvent, useState } from 'react';

import StyledInput from './styles/styled_input';
type PropsType = {
  id: string;
  name: string;
  type: string;
  required?: boolean;
  validationMessage: string;
  min?: number;
  max?: number;
  maxLength?: number;
  minLength?: number;
};

export default function InputField(props: PropsType) {
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
        min={props.min || 0}
        max={props.max || 0}
        minLength={props.minLength || 10}
        maxLength={props.maxLength || 20}
      />
      <label htmlFor={props.id}>
        <span>{props.name}</span>
      </label>
    </StyledInput>
  );
}
