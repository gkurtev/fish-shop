import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends Component {
    state = {
        fishes: {},
        order: {}
    };
    addFish = (fish) => {
        //1 take a copy of the existing state
        const fishes = {...this.state.fishes};
        //2 add the new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //3 use state to change fishes objext
        this.setState({fishes})
    }

    loadSamples = () => {
        this.setState({ fishes: sampleFishes })
    }

    componentDidUpdate(){
        console.log(this.state.fishes)
    }

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />

                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
                    </ul>
                </div>

                <Order/>
                
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}

export default App;