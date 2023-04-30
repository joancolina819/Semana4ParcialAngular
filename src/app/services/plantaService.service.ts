import { Injectable } from '@angular/core';
import { Planta } from '../models/planta';

@Injectable({
  providedIn: 'root'
})
export class PlantaServiceService {

  constructor() { }

  plantas:Array<Planta> = [
    new Planta("1", "test1", "test2", "test3"),
  ]
  getPlantas(): Array<Planta> {
    return this.plantas;
  }
}
