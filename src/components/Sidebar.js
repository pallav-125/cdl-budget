import React from 'react';
import '../css/Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar-sticky">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        Budget Summary
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        Capital Expenditure
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        Capital Receipts
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        Revenue Expenditure
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        Revenue Receipts
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

