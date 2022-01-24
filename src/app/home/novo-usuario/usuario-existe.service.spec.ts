/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsuarioExisteService } from './usuario-existe.service';

describe('Service: UsuarioExiste', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioExisteService]
    });
  });

  it('should ...', inject([UsuarioExisteService], (service: UsuarioExisteService) => {
    expect(service).toBeTruthy();
  }));
});
