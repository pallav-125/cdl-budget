import React from 'react';
import {Route} from 'react-router-dom';
import BudgetSummary from './dashboards/BudgetSummary.js';
import CapitalExpenditure from './dashboards/CapitalExpenditure.js';
import CapitalReceipts from './dashboards/CapitalReceipts.js';
import RevenueExpenditure from './dashboards/RevenueExpenditure.js';
import RevenueReceipts from './dashboards/RevenueReceipts.js';

const Main = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={BudgetSummary} />
            <Route path="/capital-expenditure" exact component={CapitalExpenditure} />
            <Route path="/capital-receipts" exact component={CapitalReceipts} />
            <Route path="/revenue-expenditure" exact component={RevenueExpenditure} />
            <Route path="/revenue-receipts" exact component={RevenueReceipts} />
        </React.Fragment>
    );
}

export default Main;