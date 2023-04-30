import { Injectable } from '@angular/core';
import { Planta } from '../models/planta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlantaServiceService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  plantas:Array<Planta> = [
    new Planta("1", "test1", "test2", "test3"),
  ]
  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }
}
