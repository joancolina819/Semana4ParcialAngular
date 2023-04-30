/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantaServiceService } from './plantaService.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: PlantaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantaServiceService]
    });
  });

  it('should ...', inject([PlantaServiceService], (service: PlantaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
