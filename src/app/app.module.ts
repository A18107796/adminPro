import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


/* RUTAS */
import { APP_ROUTES } from './app.routes';

/* Modulos */
import { PagesModule } from './pages/pages.module';

/* Components */
import { LoginComponent } from './login/login.component';
import { RegistersComponent } from './login/registers.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistersComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
