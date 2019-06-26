import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import capitalData from '../../data/capitalExpenditure.json';

class CapitalExpenditure extends React.Component {
    state = {
        expenditureFunctions: {},
        expenditureSelectedFunction: '',
        subExpenditureFunctions: {}
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

    createSubExpenditurePie = (mainExpenditureFunction) => {
        let subExpenditureFunctions = this.getPieOptions(); 
        let seriesData = [];

        const data = capitalData.expenditureFunctions.filter(d => {
            return d.name === mainExpenditureFunction;
        });
        console.log(data[0].subExpenditureFunctions)

        data[0].subExpenditureFunctions.forEach(d => {
            seriesData.push([d.name, d.value, false]);
        });

        subExpenditureFunctions.series[0].data = [...seriesData];
        subExpenditureFunctions.title.text = mainExpenditureFunction;

        this.setState({
            subExpenditureFunctions: subExpenditureFunctions
        });
    }

    createMainExpenditurePie = () => {
        let expenditureFunctions = this.getPieOptions(); 
        let seriesData = [];

        capitalData.expenditureFunctions.forEach(expFunc => {
            seriesData.push([expFunc.name, expFunc.value, false]);
        });

        expenditureFunctions.series[0].data = [...seriesData];
        expenditureFunctions.series[0].data[0][2] = true;
        expenditureFunctions.series[0].data[0].push(true);
        expenditureFunctions.title.text = "Main Expenditure Functions";
        this.createSubExpenditurePie(expenditureFunctions.series[0].data[0][0]);

        // setting click action on pie slice
        expenditureFunctions.plotOptions.series.point.events.click = (e) => {
            this.createSubExpenditurePie(e.point.name);
            this.setState({expenditureSelectedFunction: e.point.name});
        }

        this.setState({
            expenditureFunctions: expenditureFunctions,
            expenditureSelectedFunction: expenditureFunctions.series[0].data[0][0]
        });
    }

    componentDidMount() {
        this.createMainExpenditurePie();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <HighchartsReact highcharts={Highcharts} options={this.state.expenditureFunctions} />
                </div>
                <div className="col-md-6">
                    <HighchartsReact highcharts={Highcharts} options={this.state.subExpenditureFunctions} />
                </div>
            </div>
        );
    }
}

export default CapitalExpenditure;