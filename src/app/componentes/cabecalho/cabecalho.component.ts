import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
})
export class CabecalhoComponent implements OnInit {

  user$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {

  }

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }

}
