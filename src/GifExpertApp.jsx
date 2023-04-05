import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';
import './styles.css';
import React, { useState } from 'react';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['selena']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Gif Expert</h1>

            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />
        
            {
                categories.map((category) => (
                    <GitGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
}
