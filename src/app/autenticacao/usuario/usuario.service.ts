import { Usuario } from "./usuario";
import { TokenService } from "./../token.service";
import { Injectable } from "@angular/core";
import jwt_decode from "jwt-decode";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  //Requires an initial value and emits the current value to new subscr
  private usuarioSubject = new BehaviorSubject<Usuario>(null);

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decotificaJWT();
    }
  }

  private decotificaJWT() {
    const token = this.tokenService.retornaToken();
    //decodifica token
    const usuario = jwt_decode(token) as Usuario;
    //A função next é utilizada para passar valores para o Subject e completá-lo,
    //dessa maneira, ao chamar o .next você estará dizendo que o mesmo foi completado.
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token)
    this.decotificaJWT()
  }

  logout() {
    this.tokenService.excluiToken();
    this.usuarioSubject.next(null)
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}
