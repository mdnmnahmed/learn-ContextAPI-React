import React, { Component } from 'react';
import Employee from './Employee';

import { Provider } from './Context';

class App extends Component {
    state = {
        name: 'Numan',
        pro: 'MERN Stack Developer',
        salary: 15000,
    }


    increaseSalary = () => {
        this.setState({
            salary: this.state.salary + 5000
        });
    }

    render() {
        const data = {
            stateData: this.state,
            increaseSalary: this.increaseSalary
        }

        return (
            <>
                <Provider value={data}>
                    <h2>App Component</h2>
                    <Employee />
                </Provider>
            </>
        );
    }
}
export default App;