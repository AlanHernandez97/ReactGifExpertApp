import React, { Fragment as form, useState } from 'react';
import PropTypes from 'prop-types';
import GifExpertApp from '../GifExpertApp';

export const AddCategories = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');
    const handleinputChange = (e) =>{
        setinputValue(e.target.value);
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
          setCategories(cats => [inputValue, ...cats]);
          setinputValue('')
        }

    }

  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          value = {inputValue}
          onChange= {handleinputChange}
          placeholder = 'Buscar un GIF'
        />
    </form>
  )
}


    AddCategories.propTypes ={
      setCategories: PropTypes.func.isRequired
    }

export default AddCategories