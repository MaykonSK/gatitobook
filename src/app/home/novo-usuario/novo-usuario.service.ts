import { environment } from './../../../environments/environment';
import { NovoUsuarioInterface } from './novo-usuario-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuarioInterface){
    return this.http.post(API+'/user/signup', novoUsuario)
  }

  verificaUsuarioExistente(nomeUsuario: string) {
    return this.http.get(API+'/user/exists/'+nomeUsuario)
  }
}
