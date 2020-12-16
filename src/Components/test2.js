import React, { Component } from "react";
import axios from 'axios'; 

class Test2 extends Component {
    state = { 
        sigs : [], 
    } 

    componentDidMount() { 
        axios.get('http://127.0.0.1:8000/expo') 
        .then(res => {  
            this.setState({ sigs : res.data.sigo }); 
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

export default Test2;