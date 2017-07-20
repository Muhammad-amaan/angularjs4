import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {  ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
//import { RouterModule, Routes } from '@angular/router';
//import { GetDataService } from './get-data.service';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routes } from './app.router';
import { TournamentComponent } from './tournament/tournament.component';

// const appRoutes: Routes = [
//   { path: 'home', component: HomeComponent },
//   //{path :'login',component:LoginComponent},
//   // { path: '',
//   //   redirectTo: 'login',
//   //   pathMatch: 'full'
//   // }
//   // { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
      //GetDataService,
    LoginComponent,
    HomeComponent,
    TournamentComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }