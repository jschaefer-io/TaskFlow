import Chart from "./class/Chart";
import ChartItem from "./class/ChartItem";
import ChartConnection from "./class/items/ChartConnection";
import ChartAction from "./class/items/ChartAction";
import ChartEvent from "./class/items/ChartEvent";



function test(){

    const chart: Chart = new Chart('#test', 1000, 1000);

    let chartAction: ChartItem = new ChartAction('Das ist ein Test', 500, 400);
    let chartEvent: ChartItem = new ChartEvent('Update der Datenbank', 340, 100);
    chart.append(chartAction);
    chart.append(chartEvent);
    let connection: ChartItem = new ChartConnection(chartAction, chartEvent);
    chart.append(connection);
}



export default test;