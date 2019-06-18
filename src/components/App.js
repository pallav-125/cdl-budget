import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import '../css/App.scss';
import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <div>
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
        );
    } 
};

export default App;