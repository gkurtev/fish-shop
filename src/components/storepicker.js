import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
    myInputVal = React.createRef();
    
    goToStore = event => {
        // 1. Stop the form from submitting
        event.preventDefault();
        //2 get the text from that input
         const storeName = this.myInputVal.current.value;         
        //3 change the page to /store/whatever they entered
        this.props.history.push(`/store/${storeName}`)
    }
    render(){
        return  (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>

                <input 
                type="text"
                required 
                placeholder={getFunName()}
                ref={this.myInputVal}
                />

                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;

//1 Refs is touching the Dom it allows us to reference an actual dom node 
//2 syncing the text input into STATE !!!!!
//3 React comes with its methods
//4 in order to activate a function we need to control this and we have 2 ways: first is to bind() it and the second is to use an arrow function which is a lot better m8
// not with window.location but with push state with react Router :(
    // WOOOOOOOOOOOOOOOOOOOOOOOOOOW
// what is tate = Object that holds data that self needs ot children needs sometimes data lives in multiple places in like  with Rect the dont touch the Dom instead of thinking of updating all the pieces just update othe data and let react take it