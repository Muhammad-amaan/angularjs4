import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
//import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routes } from './app.router';

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
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routes,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
