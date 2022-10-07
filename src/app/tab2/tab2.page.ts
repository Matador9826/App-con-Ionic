import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  public num1: number;
  public num2: number;
  public result: number;

  constructor() {}

  public sumador(): void {
    this.result = (this.num1 + this.num2);
  }
}
