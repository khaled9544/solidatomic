import React, { Component } from 'react';
import MainTemplate from '../../templates/main';

class Main extends Component {
    state = {
        isLoading: false
    }

    componentDidMount() {
        console.log("Yes component has been mounted");
    }
    
    render() {
        return  <MainTemplate />
    }
}

export default Main;