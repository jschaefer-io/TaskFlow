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
import ChartRect from "./class/items/ChartRect";
import ChartLogic from "./class/items/ChartLogic";
import ChartOr from "./class/items/ChartOr";
import ChartAnd from "./class/items/ChartAnd";


const TaskFlow = {
    Chart: Chart,
    Item: {
        Action: ChartAction,
        Connection: ChartConnection,
        Event: ChartEvent,
        Line: ChartLine,
        Text: ChartText,
        Rect: ChartRect,
        Template: ChartItem
    },
    Logic: {
        Or: ChartOr,
        And: ChartAnd,
        Template: ChartLogic
    }
};

export default TaskFlow;