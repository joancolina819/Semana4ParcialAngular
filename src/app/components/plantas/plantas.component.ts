import { Component, OnInit } from '@angular/core';
import { Planta } from 'src/app/models/planta';
import { PlantaServiceService } from 'src/app/services/plantaService.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

  plantas: Array<Planta> =[]
  constructor(private PlantaService: PlantaServiceService) { }

  getPlantaInfo() {
    this.PlantaService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
    });
    console.log(this.plantas)
  }

  ngOnInit() {
    this.getPlantaInfo()
  }

}
