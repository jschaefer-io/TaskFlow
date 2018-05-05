// Extend Window Type with TaskFlow-Property
interface TaskFlowWindow extends Window{
    TaskFlow: any
}
declare const window: TaskFlowWindow;


import Chart from "./class/Chart";
import ChartItem from "./class/ChartItem";
import ChartConnection from "./class/items/ChartConnection";
import ChartAction from "./class/items/ChartAction";
import ChartEvent from "./class/items/ChartEvent";
import ChartLine from "./class/items/ChartLine";
import ChartText from "./class/items/ChartText";


const TaskFlow = {
    Chart: Chart,
    Item: ChartItem,
    Items: {
        Action: ChartAction,
        Connection: ChartConnection,
        Event: ChartEvent,
        Line: ChartLine,
        Text: ChartText
    }
};

window.TaskFlow = TaskFlow;

export default TaskFlow;