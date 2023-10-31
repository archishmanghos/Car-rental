import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './myComponents/homepage/homepage.component';
import { LoginRegisterComponent } from './myComponents/login-register/login-register.component';
import { CarsDisplayComponent } from './myComponents/cars-display/cars-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginRegisterComponent,
    CarsDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
