import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { map, filter, retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscripcion: Subscription;
  constructor() {
    let contador = 0;


    this.subscripcion = this.regresarObservable().subscribe(
      numero => console.log('sub', numero),
      error => console.log('Error en el Obs', error),
      () => console.log('El observador Termino!.')
    )


  }
  ngOnDestroy(): void {
    console.log("La pagina se va cerrar");
    this.subscripcion.unsubscribe();

  }

  ngOnInit(): void {
  }

  regresarObservable(): Observable<any> {

    return new Observable((observer: Subscriber<any>) => {

      let contador = 0;

      let interval = setInterval(() => {

        contador += 1;

        const salida = {
          valor: contador
        }

        observer.next(salida);

        /*         if (contador === 3) {
                  clearInterval(interval);
                  observer.complete();
                } */
      }, 1000);
    }).pipe(
      map((data) => {
        return data.valor;
      }),
      filter((valor, index) => {
        if ((valor % 2) === 1) {
          //impar
          return true;
        } else {
          return false;
        }
      })
    );

  }

}
