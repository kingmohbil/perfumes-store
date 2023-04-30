import StyledForm from './styles/styled_form';
import FormInput from './form_input';
import Textarea from './textarea';
import React from 'react';
export default function ProductForm() {
  return (
    <StyledForm>
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
        }}
      >
        <FormInput type="text" name="* Name" id="name" required={true} />
        <FormInput type="number" name="* Price" id="price" required={true} />
        <Textarea id="description" name="* Description" min={10} max={100} />
        <input type="submit" value="submit" />
      </form>
    </StyledForm>
  );
}
