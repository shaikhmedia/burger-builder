import React from 'react';
import Styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ( props ) => {
    return (
        <div className={Styles.Burger}>
            <BurgerIngredient type='bread-top'/>
            <BurgerIngredient type='meat'/>
            <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
};

export default burger;