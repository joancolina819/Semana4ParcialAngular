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
  plantasInterior:number=0
  plantasexterior:number=0
  constructor(private PlantaService: PlantaServiceService) { }

  getPlantaInfo() {
    this.PlantaService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
      this.calculatePlantasNumber(plantas)
    });
  }

  calculatePlantasNumber(plantas:Array<Planta>){
    plantas.forEach((planta:Planta) => {
      if(planta.tipo === "Interior"){
        this.plantasInterior = this.plantasInterior+1;
      }else{
        this.plantasexterior = this.plantasexterior+1;
      }
  });
  }

  ngOnInit() {
    this.getPlantaInfo()
  }

}
