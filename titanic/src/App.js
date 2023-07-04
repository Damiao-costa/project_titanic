import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={apiResponse:""}
    }
    callAPI(){
        fetch("http://localhost:8000/data")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res}));
    }
    componentDidMount()
    {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                
            </header>
            <body>
                <p>
                    {this.state.apiResponse}
                </p>
            </body>
            </div>
        );
    }
}
export default App;
