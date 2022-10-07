import { Component } from '@angular/core';
import { NumberToText } from '../number_to_text';
import { DataM } from './data.model';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  public multi: number;
  public dataList: DataM[] = [];
  private numberToText : NumberToText = new NumberToText();
  constructor() { }


  public dameNumeroX(): void {
    this.dataList = [];
    for (let i = 1; i <= 13; i++) {
      this.dataList.push(
        {
          valor: this.multi,
          seq: i,
          reultN: this.multi * i,
          resultText: this.numberToText.dameNumero(this.multi * i),
          operator : 'X'
        }
      );
    }
    console.log(this.dataList);
  }
}
