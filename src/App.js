import React from 'react';
import {Counter} from './features/counter/Counter';
import './App.css';
import Product1App from "../Product1/src/Product1App";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Counter/>
                <p>
                    Edit <code>src/Product1App.js</code> and save to reload.
                </p>
            </header>
            <main>
                It's product page.
                <Product1App/>
            </main>
        </div>
    );
}

export default App;
