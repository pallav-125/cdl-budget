import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar-sticky">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink to="/" exact>
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        Budget Summary
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/capital-expenditure" exact>
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        Capital Expenditure
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/capital-receipts" exact>
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        Capital Receipts
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/revenue-expenditure" exact>
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        Revenue Expenditure
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/revenue-receipts" exact>
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        Revenue Receipts
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

