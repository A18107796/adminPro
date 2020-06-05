import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-rosquilla',
  templateUrl: './rosquilla.component.html',
  styles: [
  ]
})
export class RosquillaComponent implements OnInit {
  /*   @Input('labels') public doughnutChartLabels: Label[];
    @Input('data') public doughnutChartData: MultiDataSet = [];
    @Input('tipo') public doughnutChartType: ChartType; */
  @Input('objeto') public objeto: any;
  @Input('titulo') public titulo: string;

  constructor() { }

  ngOnInit(): void {

  }

}
