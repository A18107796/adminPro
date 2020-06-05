import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('titulo') leyenda: string = 'Leyenda';
  @Input('numero') porcentaje: number = 50;
  @Output('updateValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {


  }

  ngOnInit(): void {
  }

  onChanges(newValue: number) {
    /* let elementHtml: any = document.getElementsByName('porcentaje')[0]; */
    /* console.log(this.txtProgress); */

    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0
    } else {
      this.porcentaje = newValue;
    }
    /*     elementHtml.value = Number(this.porcentaje); */
    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }

  cambiarValor(valor) {

    const aux: number = this.porcentaje + valor;

    if (aux > 100 || aux < 0) {
      return;
    }
    this.porcentaje = aux;
    this.cambioValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();
  }

}
