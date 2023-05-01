import StyledForm from './styles/styled_form';
import FormInput from './form_input';
import Textarea from './textarea';
import React from 'react';
export default function ProductForm() {
  return (
    <StyledForm>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormInput type="text" name="* Name" id="name" required={true} />
        <FormInput type="number" name="* Price" id="price" required={true} />
        <Textarea id="description" name="* Description" min={10} max={100} />
        <div className="col-6">
          <button type="button">
            <label htmlFor="productImage">Add Image</label>
          </button>
          <div
            style={{
              display: 'none',
            }}
          >
            <input
              type="file"
              name="productImage"
              id="productImage"
              accept="image/png, image/jpeg, image/jpg, image/svg, image/webp"
              onSubmit={() => {
                console.log('submitting');
              }}
            />
          </div>
          <input type="submit" value="Add Product" />
        </div>
      </form>
    </StyledForm>
  );
}
