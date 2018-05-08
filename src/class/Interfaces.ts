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


export interface WaypointData{
    connection: number,
    point: Coordinate,
}