import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

constructor(private tokenService: TokenService) { }

  private decotificaJWT() {
    const token = this.tokenService.retornaToken();
    //decodifica token
    const usuario = jwt_decode(token) as Usuario;
  }
}
