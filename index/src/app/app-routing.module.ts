import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AmazonpayComponent } from './amazonpay/amazonpay.component';
import { PrimeComponent } from './prime/prime.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { CustomerserviceComponent } from './customerservice/customerservice.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopaccessoriesComponent } from './laptopaccessories/laptopaccessories.component';
import { MobileaccessoriesComponent } from './mobileaccessories/mobileaccessories.component';
import { TvHomeComponent } from './tv-home/tv-home.component';
import { AudioComponent } from './audio/audio.component';
import { CameraComponent } from './camera/camera.component';
import { ComputerperipheralsComponent } from './computerperipherals/computerperipherals.component';
import { SmarttechnologyComponent } from './smarttechnology/smarttechnology.component';
import { MusicalinstrumentComponent } from './musicalinstrument/musicalinstrument.component';
import { StationaryofficeComponent } from './stationaryoffice/stationaryoffice.component';
import { ComputerComponent } from './computer/computer.component';



const routes: Routes = [{
  path: 'login', component: LoginComponent, pathMatch: 'full'
},
{
  path: '',component:ComputerComponent, pathMatch: 'full'
},
{
  path: 'computer',component:ComputerComponent, pathMatch: 'full'
},
{
  path: 'home',component:HomeComponent, pathMatch: 'full'
},
{
  path: 'cart',component:CartComponent
},
{
  path: 'main',component:MainpageComponent
}
,
{
  path: 'amazonpay',component:AmazonpayComponent
},
{
  path: 'prime',component:PrimeComponent
}
,
{
  path: 'bestseller',component:BestsellerComponent
},
{
  path: 'customerservice',component:CustomerserviceComponent
},
{
  path: 'electro',component:ElectronicsComponent
},
{
  path: 'mobile',component:MobileComponent,
  
}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
