import React from 'react';
import FormErrors from '../FormErrors'

const NewProductForm = ({ createProduct, errors }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = {
      title: formData.get('title'),
      description: formData.get('description'),
      price: formData.get('price')
    }
    createProduct(params);
    event.currentTarget.reset();
  }

  return(
    <form onSubmit={handleSubmit}>
      <h2>New Product</h2>
      <div>
        <label htmlFor='title'>Title</label>
        <br />
        <input name='title' id='title' />
        <FormErrors forField="title" errors={errors}/>
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <br />
        <textarea name='description' id='description' />
        <FormErrors forField="description" errors={errors}/>
      </div>
      <div>
        <label htmlFor='price'>Price</label>
        <br />
        <textarea name='price' id='price' />
        <FormErrors forField="price" errors={errors}/>
      </div>
      <div>
        <input type='submit' value='Submit' />
      </div>
    </form>
  )
}

export default NewProductForm
