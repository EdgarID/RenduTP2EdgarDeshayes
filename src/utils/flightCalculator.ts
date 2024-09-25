import type { Planet } from "../types";
import { Starship } from "../class";

export function calculateFlightDurationFromEarth(p:Planet,v:Starship,unity:boolean):number{
    let r = p.distanceFromEarth * 1000000 / v.speed;
    if(unity??true){return(r);}
    return(r/24);
}