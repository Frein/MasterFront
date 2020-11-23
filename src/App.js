import React, {useState} from 'react';
import {Counter} from './features/counter/Counter';
import './App.css';
import Product1App from "./Product1/src/Product1App";
import {useSelector} from "react-redux";
import {selectCount} from "./features/counter/counterSlice";
import GlobalRouter from "./globalRouter";
import {BrowserRouter, Link, Switch} from "react-router-dom";


function App() {
    const count = useSelector(selectCount);
    const [permissions, setPermission] = useState({page1: true, page2: true, counter: true});
    return (
        <BrowserRouter>
            <div>
                {Object.keys(permissions).map(k => {
                    return <div>{k}:<input key={k} type='checkbox' checked={permissions[k]} name={k} onChange={
                        (e) => {
                            setPermission({
                                ...permissions,
                                [k]: e.target.checked
                            })
                        }
                    }/></div>
                })}
            </div>
            <div className="App">
                <ul>
                    {
                        permissions['counter'] && <li>
                            <Link to="/">Counter</Link>
                        </li>
                    }
                    {
                        permissions['page1'] && <li>
                            <Link to="/page1">Page1</Link>
                        </li>
                    }
                    {
                        permissions['page2'] && <li>
                            <Link to="/page2">Page2</Link>
                        </li>
                    }
                </ul>
                <header className="App-header">
                    It's MASTER FRONT
                    <Counter/>
                </header>
                <main>
                    <h1>It's product page.</h1>
                    <Product1App masterCount={count} routing={<GlobalRouter permissions={permissions}/>}/>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
