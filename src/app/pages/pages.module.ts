import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';


// Modules //
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms'
import { ChartsModule } from 'ng2-charts';

// Components // 
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

// Temporal //
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { CommonModule } from '@angular/common';
import { Graficas1Component } from './graficas1/graficas1.component';
import { RosquillaComponent } from '../components/rosquilla/rosquilla.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    IncrementadorComponent,
    Graficas1Component,
    RosquillaComponent,
    PagesComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ChartsModule,
    PAGES_ROUTES,

  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    RosquillaComponent,

  ]
})
export class PagesModule { }
