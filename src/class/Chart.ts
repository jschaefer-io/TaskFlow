import ChartItem from "./ChartItem"

declare var d3: any;

class Chart{
    private readonly svg: Selection|any;
    constructor(selector: string, width: number, height: number){
        this.svg = d3.select(selector).append('svg')
            .attr('width', width)
            .attr('height', height);
    }
    public getSvg(){
        return this.svg;
    }
    append(item: ChartItem): void{
        item.render(this);
    }
}
export default Chart;