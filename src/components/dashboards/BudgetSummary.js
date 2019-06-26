import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import budgetData from '../../data/budgetSummary.json';

class BudgetSummary extends React.Component {
    state = {
        revenueOptions: {},
        capitalOptions: {}
    }

    getChartOptions = () => {
        return {
            chart: { type: 'column' },
            title: { text: 'chart title' },
            subtitle: { text: 'Source: CDL Budget Files' },
            xAxis: { categories: [], crosshair: true },
            yAxis: { min: 0, title: { text: 'Total Amount (Rs)' } },
            tooltip: { shared: true },
            plotOptions: {
                column: { pointPadding: 0.2, borderWidth: 0 }
            },
            series: []
        };
    }

    getXaxisCategories = (data) => {
        const categories = [];
        data.forEach(d => {
            if(categories.indexOf(d.year) === -1) {
                categories.push(d.year);
            }
        });
        return categories;
    } 

    getSeries = (data) => {
        const seriesNames = [...new Set(data.map(d => d.type))];
        let series = [];

        seriesNames.forEach(sname => {
            let seriesObject = {'name': sname, data: []};
            data.forEach(d => {
                if(seriesObject.name === d.type) {
                    seriesObject.data.push(parseInt(d.expenditure));
                }
            });
            series.push(seriesObject);
        });
        return series;
    }

    componentDidMount() {
        const revenueOptions = this.getChartOptions();
        revenueOptions.title.text = 'Revenue Expenditure';
        revenueOptions.xAxis.categories = [...this.getXaxisCategories(budgetData.revenueAccount)];
        revenueOptions.series = [...this.getSeries(budgetData.revenueAccount)];

        const capitalOptions = this.getChartOptions();
        capitalOptions.title.text = 'Capital Expenditure';
        capitalOptions.xAxis.categories = [...this.getXaxisCategories(budgetData.capitalAccount)];
        capitalOptions.series = [...this.getSeries(budgetData.capitalAccount)];

        this.setState({
            revenueOptions: revenueOptions,
            capitalOptions: capitalOptions
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <HighchartsReact highcharts={Highcharts} options={this.state.revenueOptions} />
                </div>
                <div className="col-md-6">
                    <HighchartsReact highcharts={Highcharts} options={this.state.capitalOptions} />
                </div>
            </div>
        );
    }
}

export default BudgetSummary;

