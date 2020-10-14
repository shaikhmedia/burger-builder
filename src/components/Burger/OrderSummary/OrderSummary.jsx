import React from 'react';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(el => {
            return <li key={el}>
                <span style={{textTransform: 'capitalize'}}>{el}</span>: {props.ingredients[el]}
            </li>
        })
        
    return ( 
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to cart?</p>
        </React.Fragment>
     );
}
 
export default orderSummary;