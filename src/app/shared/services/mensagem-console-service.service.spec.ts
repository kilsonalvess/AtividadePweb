import { TestBed } from '@angular/core/testing';

import { MensagemConsoleServiceService } from './mensagem-console-service.service';

describe('MensagemConsoleServiceService', () => {
  let service: MensagemConsoleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensagemConsoleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
