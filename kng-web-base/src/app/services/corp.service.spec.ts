import { TestBed, inject } from '@angular/core/testing';

import { CorpService } from './corp.service';
import { HttpClientModule } from '@angular/common/http';

describe('CorpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CorpService]
    });
  });

  it('should be created', inject([CorpService], (service: CorpService) => {
    expect(service).toBeTruthy();
  }));
});
