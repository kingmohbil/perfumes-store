import React, { ChangeEvent, useState } from 'react';

import StyledInput from './styles/styled_input';
type PropsType = {
  id: string;
  name: string;
  type: string;
  required?: boolean;
};

export default function InputField(props: PropsType) {
  const [error, setError] = useState(false);
  return (
    <StyledInput>
      <input
        type={props.type}
        required={props.required || false}
        name={props.id}
        className={error ? 'invalid' : ''}
        onChange={(e: React.ChangeEvent) => {}}
      />
      <label htmlFor={props.id}>
        <span id="placeholder">
          {props.name} {error}
        </span>
      </label>
    </StyledInput>
  );
}
