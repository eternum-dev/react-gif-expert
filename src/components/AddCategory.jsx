import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputValue = (event) => {
        const name = event.target.value;

        setInputValue(name);
    }

    const onSunmitEvent = (event) => {
        event.preventDefault();
        const newInput = inputValue.trim();

        if (newInput.length <= 1) return;

        onNewCategory(newInput);
        setInputValue('');
    }

    return (
        <form onSubmit={onSunmitEvent}>
            <input type='text'
                placeholder='Hunter x Hunter'
                value={inputValue}
                onChange={onInputValue}
            ></input>
        </form>
    )
}
