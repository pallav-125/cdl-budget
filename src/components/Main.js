import React from 'react';
import {Route} from 'react-router-dom';
import BudgetSummary from './dashboards/BudgetSummary.js';

const Main = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={BudgetSummary} />
            {/* <Route path="/capital-expenditure" component={BudgetSummary} /> */}
            {/* <Route path="/capital-receipts" component={BudgetSummary} /> */}
            {/* <Route path="/revenue-expenditure" component={BudgetSummary} /> */}
            {/* <Route path="/revenue-receipts" component={BudgetSummary} /> */}
        </React.Fragment>
    );
}

export default Main;