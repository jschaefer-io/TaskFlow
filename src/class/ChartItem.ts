import Chart from "./Chart"

export interface BBox {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface Coordinate {
    x: number;
    y:number;
}

abstract class ChartItem{
    protected selector: string;
    protected position: Coordinate;
    private children: {[k: string]: ChartItem} = {};
    protected offset: Coordinate = {x:0,y:0};
    public node: any;

    protected constructor(selector: string, x: number = 0, y: number = 0){
        this.selector = selector;
        this.position = {x:x,y:y};
    }

    public setOffset(x: number, y: number): void{
        this.offset.x = x;
        this.offset.y = y;
    }

    protected addChildren(name: string , item: ChartItem): void{
        this.children[name] = item;
    }

    public getChildren(name: string): ChartItem{
        return this.children[name];
    }

    public getNode(){
        return this.node.node();
    }

    public getBBox(): BBox{
        return this.getNode().getBBox();
    }

    public render(chart: Chart){
        this.renderChildren(chart);
        this.node = chart.getSvg().append(this.selector);
        return this.node;
    };

    public renderChildren(chart: Chart): void{
        for (let key in this.children){
            this.children[key].render(chart);
        }
    }
}

export default ChartItem;