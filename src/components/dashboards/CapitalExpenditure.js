import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import capitalData from '../../data/capitalExpenditure.json';

class CapitalExpenditure extends React.Component {
    state = {
        expenditureFunctions: {},
        expenditureSelectedFunction: ''
    }

    getPieOptions = () => {
        return {
            chart: { styledMode: true }, 
            title: { text: 'Main Expenditure Functions' },
            plotOptions: {
                series: {
                    cursor: 'pointer', point: { 
                        events: {} 
                    }
                }
            },
            series: [{
                type: 'pie',
                allowPointSelect: true,
                keys: ['name', 'y', 'selected', 'sliced'],
                data: [],
                showInLegend: true
            }]
        };
    }

    createPieGraph = () => {
        let expenditureFunctions = this.getPieOptions(); 
        let seriesData = [];

        capitalData.expenditureFunctions.forEach(expFunc => {
            seriesData.push([expFunc.name, expFunc.value, false]);
        });

        expenditureFunctions.series[0].data = [...seriesData];
        expenditureFunctions.series[0].data[0][2] = true;
        expenditureFunctions.series[0].data[0].push(true);

        // setting click action on pie slice
        expenditureFunctions.plotOptions.series.point.events.click = (e) => {
            this.setState({expenditureSelectedFunction: e.point.name});
        }

        this.setState({
            expenditureFunctions: expenditureFunctions,
            expenditureSelectedFunction: expenditureFunctions.series[0].data[0][0]
        });
    }

    componentDidMount() {
        this.createPieGraph();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <HighchartsReact highcharts={Highcharts} options={this.state.expenditureFunctions} />
                </div>
                <div className="col-md-6">
                    <p className="text-center">{this.state.expenditureSelectedFunction}</p>
                </div>
            </div>
        );
    }
}

export default CapitalExpenditure;