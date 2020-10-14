import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Burger from '../../Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import Modal from '../../../components/UI/Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICE = {
    salad: .5,
    bacon: .7,
    cheese: .4,
    meat: 1.3
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseAble: false,
        purchasing: false
    };

    updatePurchaseStatusHandler = (ingredients) => {
        const sum = Object.values(ingredients)
        .reduce((acc, cur) => {
            return acc + cur;
        }, 0);

        this.setState({purchaseAble: sum > 0})
    }

    addIngredientHandler = ( type ) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.updatePurchaseStatusHandler(updatedIngredients);
    }


    removeIngredientHandler = ( type ) => {
        const updatedCount = this.state.ingredients[type] - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceReduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction;

        if(this.state.ingredients[type] > 0) {
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice
            })
        }
        this.updatePurchaseStatusHandler(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let value in disabledInfo) {
            disabledInfo[value] = disabledInfo[value] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    />
                </Modal>               

                <Burger ing={this.state.ingredients}/>

                <BuildControls
                ordered={this.purchaseHandler}
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler} 
                disable={disabledInfo}
                price={this.state.totalPrice}
                purchase={this.state.purchaseAble}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;