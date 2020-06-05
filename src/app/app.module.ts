import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


/* RUTAS */
import { APP_ROUTES } from './app.routes';

/* Modulos */
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';

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
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
