import React, { Component } from 'react';
import { formatPrice } from '../helpers';


class Fish extends Component {
    render(){
        const {name, image, desc, price, status} = this.props.details;// thats with destructuring DESTRUCTURING !!! remember

        return(
            <li className="menu-fish">
                <img src={image} alt={name}/>

                <h3 className="fish-name">
                    {name} 
                    <span className="price">{formatPrice(price)}</span>
                </h3>

                <p>{desc}</p>

                {status === 'available' ? <button>Add to Cart</button> : <button disabled="true">SOLD OUT</button>}
            </li>
        )
    }
}

export default Fish;