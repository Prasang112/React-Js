import { Component } from "react";

class EvenOddCounter extends Component {
    constructor() {
        super();
        this.state = {
            evenCounter: 0,
            oddCounter: 1
        }
    }
    incrementEvenCounter = () => {
        this.setState({ evenCounter: this.state.evenCounter + 2 })
    }
    incrementOddCounter = () => {
        this.setState({ oddCounter: this.state.oddCounter + 2 });
    }
    render() {
        return <>
            <h1>Even Odd Component</h1>
            <button onClick={this.incrementEvenCounter}>EvenCounter:{this.state.evenCounter}</button>
            <br/> <br/>
            <button onClick={this.incrementOddCounter}>OddCounter:{this.state.oddCounter}</button>
        </>
    }
}

export default EvenOddCounter;