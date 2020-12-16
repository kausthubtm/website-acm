import React, { Component } from "react";
import axios from 'axios'; 

class Test extends Component {
    state = { 
        sigs : [], 
    } 

    componentDidMount() { 
        axios.get('https://jsonplaceholder.typicode.com/users') 
        .then(res => {  
            this.setState({ sigs : res.data }); 
        }) 
    } 

    render() {

        return (
            <ul>
                {this.state.sigs.map(sig =><li>{sig.name}</li>)}
            </ul>
        );
    }
}

export default Test;