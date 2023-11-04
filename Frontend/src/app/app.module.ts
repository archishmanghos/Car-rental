import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './myComponents/homepage/homepage.component';
import { LoginRegisterComponent } from './myComponents/login-register/login-register.component';
import { CarsDisplayComponent } from './myComponents/cars-display/cars-display.component';
import { CarDetailsComponent } from './myComponents/car-details/car-details.component';
import { TestimonialsComponent } from './myComponents/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginRegisterComponent,
    CarsDisplayComponent,
    CarDetailsComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
