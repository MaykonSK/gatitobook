import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuarioInterface } from './novo-usuario-interface';
import { minusculoValidator } from './minusculo-validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm: FormGroup;
  teste: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService
    ) { }

  ngOnInit() {
    this.novoUsuarioForm = this.formBuilder.group({
      //validators serve para validar os campos
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [minusculoValidator], [this.usuarioExistenteService.usuarioJaExiste()]],
      password: ['']
    })
  }

  cadastrar() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuarioInterface;
    console.log(novoUsuario)
  }


}
