import { Animais } from './../animais';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade_fotos_animais',
  templateUrl: './grade_fotos_animais.component.html',
  styleUrls: ['./grade_fotos_animais.component.scss']
})
export class Grade_fotos_animaisComponent implements OnInit {

  @Input() animais: Animais

  constructor() { }

  ngOnInit() {
  }

}
