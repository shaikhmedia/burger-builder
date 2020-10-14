import React from 'react';
import Styles from '../BuildControls/BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = ( props ) => (
    <div className={Styles.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)} 
            disabled={props.disable[ctrl.type]}/>
        ))}
        <button 
        onClick={props.ordered}
        disabled={!props.purchase} 
        className={Styles.OrderButton}>ORDER NOW</button>
    </div>
)

export default buildControls;