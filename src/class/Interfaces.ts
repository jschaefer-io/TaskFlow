/**
 * Describes the Size and Position of an SVG-Element
 */
export interface BBox{
    x: number;
    y: number;
    width: number;
    height: number;
}

/**
 * Describes a 2D-Point
 */
export interface Coordinate{
    x: number;
    y: number;
}

/**
 * Describes a Waypoint for connecting ChartItems
 */
export interface WaypointData{
    connection: number,
    point: Coordinate,
}