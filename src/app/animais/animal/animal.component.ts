import { environment } from './../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';

const API = environment.apiURL;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
})
export class AnimalComponent implements OnInit {

  urlOriginal: any;

  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = API+'/imgs'+url;
    }
  }

  get url(): string {
    return this.urlOriginal;
  }

  constructor() { }

  ngOnInit() {
  }

}
