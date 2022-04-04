import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./styles.css";
import Page from './Components/Page'

function App(){
    return (
        <div>
            <Page />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
