import { object } from 'prop-types';
import React from 'react';
import Styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ( props ) => {
    let transformedIngredients = Object.keys(props.ing).map(el => {
        return [...Array(props.ing[el])].map((_, i) => {
            return <BurgerIngredient key={el + i} type={el}/>
        })
    }).reduce((acc, cur) => {
        return acc.concat(cur);
    }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add ingredients</p>
    }

    return (
        <div className={Styles.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
};

export default burger;