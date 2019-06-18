import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import data from '../../data/budgetSummary.json';

class BudgetSummary extends React.Component {
    render() {
        const revenueOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Revenue'
            },
            subtitle: {
                text: 'Source: CDC Budget Files'
            },
            xAxis: {
                categories: [
                    '2012-13',
                    '2013-14',
                    '2014-15',
                    '2015-16',
                    '2016-17'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Amount (Rs)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>Rs. {point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Budget',
                data: [49.9, 71.5, 106.4, 129.2, 144.0]
        
            }, {
                name: 'Revised',
                data: [83.6, 78.8, 98.5, 93.4, 106.0]
        
            }, {
                name: 'Actuals',
                data: [48.9, 38.8, 39.3, 41.4, 47.0]
        
            }]
        };
    
        const capitalOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Capital'
            },
            subtitle: {
                text: 'Source: CDC Budget Files'
            },
            xAxis: {
                categories: [
                    '2012-13',
                    '2013-14',
                    '2014-15',
                    '2015-16',
                    '2016-17'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Amount (Rs)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>Rs. {point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Budget',
                data: [49.9, 71.5, 106.4, 129.2, 144.0]
        
            }, {
                name: 'Revised',
                data: [83.6, 78.8, 98.5, 93.4, 106.0]
        
            }, {
                name: 'Actuals',
                data: [48.9, 38.8, 39.3, 41.4, 47.0]
        
            }]
        };
    
        console.log('budget', data.revenueAccount);
        const getRevenueXaxisCategories = () => {
            const categories = [];
            data.revenueAccount.forEach(d => {
                if(categories.indexOf(d.year) === -1) {
                    categories.push(d.year);
                }
            });
            console.log('categories', categories)
        }
    
        getRevenueXaxisCategories()

        return (
            <div className="row">
                <div className="col-md-6">
                    <HighchartsReact highcharts={Highcharts} options={revenueOptions} />
                </div>
                <div className="col-md-6">
                    <HighchartsReact highcharts={Highcharts} options={capitalOptions} />
                </div>
            </div>
        );
    }
}

export default BudgetSummary;

