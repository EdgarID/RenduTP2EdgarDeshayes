import { StarshipStatus } from "./enum";
import {v4 as uuidv4} from 'uuid';
import * as validator from 'validator';

export class Starship {
    ref: string;
    speed: number; //En km/h.
    status: StarshipStatus;
    id: string;

    constructor(r: string, s: number, uuid?: string) {
        this.ref = r;
        this.speed = s;
        this.status = 0;
        if (validator.isUUID(uuid ?? uuidv4())) {
            this.id = uuid ?? uuidv4();
        } else { throw new Error("Not an UUID") }
    }

    takeOff() {
        if (this.status == 0) {
            this.status = 1;
        } else {
            throw new Error("Un avion qui n'est pas stationne ne peut pas s'envoler.")
        }
    }
    fly() {
        if (this.status == 1) {
            this.status = 2;
        } else {
            throw new Error("Un avion qui ne s'envole pas ne peut pas etre dans les airs.")
        }
    }
    land() {
        if (this.status == 2) {
            this.status = 3;
        } else {
            throw new Error("Un avion qui n'est pas dans les airs ne peut pas atterrir.")
        }
    }
    park() {
        if (this.status == 3) {
            this.status = 0;
        } else {
            throw new Error("Un avion qui n'atterri pas ne peut pas se stationner")
        }
    }
}