import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public url: string = "assets/imagenes/img1.jpeg";
  public name: string = "Usuario";
  
  constructor() {}

}
