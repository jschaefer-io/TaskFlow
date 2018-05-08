import Chart from "../Chart";
import ChartLine from "./ChartLine";
import ChartItem from "../ChartItem";
import {BBox, Coordinate, WaypointData} from '../Interfaces';


class ChartConnection extends  ChartItem{

    private static readonly AUTO: number = -1;
    private static readonly TOP: number = 0;
    private static readonly RIGHT: number = 1;
    private static readonly BOTTOM: number = 2;
    private static readonly LEFT: number = 3;

    private from: ChartItem;
    private target: ChartItem;

    constructor(from: ChartItem, target: ChartItem, fromConnection:number = ChartConnection.AUTO, toConnection:number = ChartConnection.AUTO){
        super('none');
        this.from = from;
        this.target = target;

        let connections: number[] = ChartConnection.calcSites(from.getBBox(), target.getBBox());
        if (fromConnection == ChartConnection.AUTO){
            fromConnection = connections[0];
        }
        if (toConnection == ChartConnection.AUTO) {
            toConnection = connections[1];
        }

        from.addConnection(fromConnection);
        target.addConnection(toConnection);


        let originData: WaypointData = {
            connection: fromConnection,
            point: ChartConnection.getOrigin(from,fromConnection)
        };
        let targetData: WaypointData = {
            connection: toConnection,
            point: ChartConnection.getOrigin(target,toConnection)
        };

        const waypoints: Coordinate[] = ChartConnection.getWayoints(originData, targetData);
        for (let i = 1; i < waypoints.length; i++){
            this.addChildren('line-' + i, new ChartLine(waypoints[i-1], waypoints[i]));
        }
    }

    private static getWayoints(origin: WaypointData, target: WaypointData){
        const distX: number = (target.point.x - origin.point.x);
        const distY: number = (target.point.y - origin.point.y);

        // Checks if the items are connected with a close to straight line
        // (no connection bending)
        const istStraight: boolean = origin.connection === (target.connection + 2) % 4;

        let waypoints: Coordinate[] = [{
            x: origin.point.x,
            y: origin.point.y
        }];

        if (origin.connection === 2 || origin.connection === 0){
            if (istStraight){
                waypoints.push({
                    x: origin.point.x,
                    y: origin.point.y + distY / 2
                });
                waypoints.push({
                    x: origin.point.x + distX,
                    y: origin.point.y + distY / 2
                });
            }
            else{
                waypoints.push({
                    x: origin.point.x,
                    y: origin.point.y + distY
                });
            }
        }
        else{
            if (istStraight){
                waypoints.push({
                    x: origin.point.x + distX / 2,
                    y: origin.point.y
                });
                waypoints.push({
                    x: origin.point.x + distX / 2,
                    y: origin.point.y + distY
                });
            }
            else{
                waypoints.push({
                    x: origin.point.x + distX,
                    y: origin.point.y
                });
            }
        }

        waypoints.push({
            x: target.point.x,
            y: target.point.y
        });

        return waypoints;
    }

    private static getOrigin(item: ChartItem, side: number): Coordinate{
        const box = item.getBBox();
        const offset = (item.countConnections(side) - 1) * 5;
        switch (side){
            case ChartConnection.TOP:
                return {
                    x: box.x + (box.width / 2) + offset,
                    y: box.y
                };
            case ChartConnection.RIGHT:
                return {
                    x: box.x + box.width,
                    y: box.y + (box.height / 2) + offset
                };
            case ChartConnection.BOTTOM:
                return {
                    x: box.x + (box.width / 2) + offset,
                    y: box.y + box.height
                };
            default: //  ChartConnection.LEFT
                return {
                    x: box.x,
                    y: box.y + (box.height / 2) + offset
                };
        }
    }

    private static calcSites(from: BBox, target: BBox): number[]{
        const compareWidth: number = (from.x + (from.width / 2)) - (target.x + (target.width / 2));
        const compareHeight: number = (from.y + (from.height / 2)) - (target.y + (target.height / 2));

        let originConnection: number;
        let targetConnection: number;


        if (compareWidth > compareHeight){
            if (compareHeight > 0){
                originConnection = ChartConnection.TOP;
            }
            else{
                originConnection = ChartConnection.BOTTOM;
            }

            if (compareWidth > 0){
                targetConnection = ChartConnection.RIGHT;
            }
            else{
                targetConnection = ChartConnection.LEFT;
            }
        }
        else{
            if (compareHeight > 0){
                targetConnection = ChartConnection.BOTTOM;
            }
            else{
                targetConnection = ChartConnection.TOP;
            }

            if (compareWidth > 0){
                originConnection = ChartConnection.LEFT;
            }
            else{
                originConnection = ChartConnection.RIGHT;
            }
        }


        // Connects the item without connection bending,
        // when the line would cross the item
        if (Math.abs(compareWidth) < target.width / 1.2
            || Math.abs(compareHeight) < target.height / 1.2) {
            if (compareHeight <= 0 || compareWidth <= 0) {
                targetConnection = (originConnection + 2) % 4;
            }
            else {
                originConnection = (targetConnection + 2) % 4;
            }
        }

        return [originConnection, targetConnection];
    }

    public render(chart: Chart){
        this.renderChildren(chart);
    }
}

export default ChartConnection;