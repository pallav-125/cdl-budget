import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Sidebar from './Sidebar';
import Main from './Main';
import Header from './Header';
import '../css/App.scss';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Header />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2">
                                <Sidebar />
                            </div>
                            <div className="col-md-10">
                                <Main />
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    } 
};

export default App;