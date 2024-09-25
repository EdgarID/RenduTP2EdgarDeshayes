
import type { Planet } from "./types";
import { Starship } from "./class";


const Prom:Starship=new Starship("Prometheus",100000);

let planets: Planet[];
const p0: Planet = {
    name: "Mercure",
    distanceFromEarth: 92
}
const p1: Planet = {
    name: "Venus",
    distanceFromEarth: 41
}
const p2: Planet = {
    name: "Mars",
    distanceFromEarth: 78
}
const p3: Planet = {
    name: "Jupiter",
    distanceFromEarth: 628
}
const p4: Planet = {
    name: "Saturn",
    distanceFromEarth: 1275000
}
const p5: Planet = {
    name: "Uranus",
    distanceFromEarth: 2724000
}
const p6: Planet = {
    name: "Neptune",
    distanceFromEarth: 4351000
}
planets=[p0,p1,p2,p3,p4,p5,p6];
console.log(planets);
planets.sort((a, b) => a.distanceFromEarth - b.distanceFromEarth);
console.log(planets);
planets.sort((a, b) => a.name.localeCompare(b.name));
console.log(planets);
console.log("La moyenne des distance est de "+(planets.reduce((a,b)=>a+b.distanceFromEarth,0)/planets.length)+" millions de km.");

