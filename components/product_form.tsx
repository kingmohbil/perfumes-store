import StyledForm from './styles/styled_form';
import FormInput from './form_input';
import Textarea from './textarea';
import React from 'react';
export default function ProductForm() {
  return (
    <StyledForm>
      <form>
        <FormInput type="text" name="* Name" id="name" required={true} />
        <FormInput type="number" name="* Price" id="price" required={true} />
        <Textarea id="description" name="* Description" min={10} max={100} />
        <div className="col-6">
          <button>
            <label htmlFor="productImage">Add Image</label>
          </button>
          <input type="file" name="productImage" id="productImage" />
          <input type="submit" value="Add Product" />
        </div>
      </form>
    </StyledForm>
  );
}
