import Chart from "./Chart"
import {Coordinate, BBox} from './Interfaces';

/**
 * Chart Item Template
 * @abstract
 */
abstract class ChartItem{

    /**
     * The Items Tag-name
     */
    protected selector: string;

    /**
     * The items Coordinate
     */
    protected position: Coordinate;

    /**
     * The Items Child-Items
     * @type {Object}
     */
    private children: { [k: string]: ChartItem } = {};

    /**
     * The Rendering Offset
     * @type {Coordinate}
     */
    protected offset: Coordinate = {x: 0, y: 0};

    /**
     * The SVG-Element Node
     */
    public node: any;

    /**
     * Number of connections on each side
     * Top, Right, Bottom, Left
     * @type {number[]}
     */
    protected connection: number[] = [0, 0, 0, 0];

    /**
     * ChartItem constructor
     * @param {string} selector The items tag-name
     * @param {number} x - the x-position
     * @param {number} y - the y-position
     */
    protected constructor(selector: string, x: number = 0, y: number = 0){
        this.selector = selector;
        this.position = {x: x, y: y};
    }

    /**
     * Sets the items rendering offset
     * @param {number} x - the x-offset
     * @param {number} y - the y-offset
     */
    public setOffset(x: number, y: number): void{
        this.offset.x = x;
        this.offset.y = y;
    }

    /**
     * Adds connection to the given side
     * @param {number} side - side must be between 0 and 3
     */
    public addConnection(side: number): void{
        this.connection[side]++;
    }

    /**
     * Returns the number of connections on the given side
     * @param {number} side - side must be between 0 and 3
     * @returns {number}
     */
    public countConnections(side: number): number{
        return this.connection[side];
    }

    /**
     * Adds a ChildItem to this Item with the given ID-Key
     * @param {string} name - the childs id
     * @param {ChartItem} item - the child Item
     */
    protected addChildren(name: string, item: ChartItem): void{
        this.children[name] = item;
    }

    /**
     * Returns the children matching the given id
     * @param {string} name - the childs id
     * @returns {ChartItem} the found child item
     */
    public getChildren(name: string): ChartItem{
        return this.children[name];
    }

    /**
     * Gets the items svg-element selection
     */
    public getElement(){
        return this.node;
    }

    /**
     * Gets the items svg-element node
     */
    public getNode(){
        return this.getElement().node();
    }

    /**
     * Gets the items BBox Object
     * @returns {BBox} contains coordinates, width and height
     */
    public getBBox(): BBox{
        return this.getNode().getBBox();
    }

    /**
     * Appends the Item to the given Chart
     * @param {Chart} chart - the Chart this Item will be appended to
     */
    public render(chart: Chart){
        this.renderChildren(chart);
        this.node = chart.getSvg().append(this.selector);
        return this.node;
    };

    /**
     * Triggers the rendering of all children
     * @param {Chart} chart - the Chart the childs will be appended to
     */
    public renderChildren(chart: Chart): void{
        for (let key in this.children) {
            this.children[key].render(chart);
        }
    }
}

export default ChartItem;