import StyledForm from './styles/styled_form';
import FormInput from './form_input';
import Textarea from './textarea';
import React, { useState } from 'react';
export default function ProductForm() {
  const [image, setImage] = useState(false);
  return (
    <StyledForm>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          if (!e.target.productImage.files[0]) {
            setImage(true);
          }
        }}
      >
        <FormInput
          id="name"
          type="text"
          name="* Name"
          validationMessage="Name Field must be at least 2 characters, not exceeding 30"
          minLength={1}
          maxLength={30}
          required={true}
        />
        <FormInput
          id="price"
          type="number"
          name="* Price"
          validationMessage="Price Field must be between 1, 100"
          min={1}
          max={100}
          required={true}
        />
        <Textarea id="description" name="* Description" min={10} max={100} />
        <div className="col-6">
          <button type="button">
            <label htmlFor="productImage">Add Image</label>
            {/* TODO styling the text here */}
            {image ? <span>You Must Add an image.</span> : ''}
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
