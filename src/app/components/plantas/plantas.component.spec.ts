import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantasComponent } from './plantas.component';
import { DebugElement } from '@angular/core';
import { Planta } from 'src/app/models/planta';
import { faker } from '@faker-js/faker';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PlantaServiceService } from 'src/app/services/plantaService.service';

describe('AppComponent', () => {
  let component: PlantasComponent;
  let fixture: ComponentFixture<PlantasComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
     declarations: [ PlantasComponent ],
     providers: [ PlantaServiceService ]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(PlantasComponent);
    component = fixture.componentInstance;

    component.plantas = [
      new Planta(faker.name.firstName(),faker.name.firstName(), faker.name.firstName(), faker.name.firstName()),
      new Planta(faker.name.firstName(),faker.name.firstName(), faker.name.firstName(), faker.name.firstName()),
      new Planta(faker.name.firstName(),faker.name.firstName(), faker.name.firstName(), faker.name.firstName())
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a table", () => {
    expect(debug.query(By.css("div")).childNodes.length).toBeGreaterThan(0);
  });

  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(3);
  });

});
