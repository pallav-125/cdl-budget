import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar-sticky">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/">
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        Budget Summary
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/capital-expenditure">
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        Capital Expenditure
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/capital-receipts">
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        Capital Receipts
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/revenue-expenditure">
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        Revenue Expenditure
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/revenue-receipts">
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        Revenue Receipts
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

