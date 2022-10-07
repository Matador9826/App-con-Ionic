import { Component } from '@angular/core';
import { NumberToText } from '../number_to_text';
// declare let NumerosALetras : any;
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public resultado: string = '';
  public numero: number;
  private numberToText : NumberToText = new NumberToText();
  
  constructor() {
  }

  public dameNumero(): void{
    this.resultado = this.numberToText.dameNumero(this.numero);
  }

  

}

