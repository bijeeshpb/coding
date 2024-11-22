import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import{MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FootComponent } from './foot/foot.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from './location/location.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { AlexaComponent } from './alexa/alexa.component';
import { FiretvComponent } from './firetv/firetv.component';
import { EbookComponent } from './ebook/ebook.component';
import { AudiobookComponent } from './audiobook/audiobook.component';
import { AmazonvideoComponent } from './amazonvideo/amazonvideo.component';
import { AmazonmusicComponent } from './amazonmusic/amazonmusic.component';
import { MobileoptionComponent } from './mobileoption/mobileoption.component';
import { TvComponent } from './tv/tv.component';
import { AmazonpayComponent } from './amazonpay/amazonpay.component';
import { PrimeComponent } from './prime/prime.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { CustomerserviceComponent } from './customerservice/customerservice.component';
import { MobileComponent } from './mobile/mobile.component';
import { SignpopupComponent } from './signpopup/signpopup.component';
import { LangComponent } from './lang/lang.component';
import { MobileaccessoriesComponent } from './mobileaccessories/mobileaccessories.component';
import { LaptopaccessoriesComponent } from './laptopaccessories/laptopaccessories.component';
import { TvHomeComponent } from './tv-home/tv-home.component';
import { AudioComponent } from './audio/audio.component';
import { CameraComponent } from './camera/camera.component';
import { ComputerperipheralsComponent } from './computerperipherals/computerperipherals.component';
import { SmarttechnologyComponent } from './smarttechnology/smarttechnology.component';
import { MusicalinstrumentComponent } from './musicalinstrument/musicalinstrument.component';
import { StationaryofficeComponent } from './stationaryoffice/stationaryoffice.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    SidebarComponent,
    FootComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    LocationComponent,
    CartComponent,
    MainpageComponent,
    DisclaimerComponent,
    AlexaComponent,
    FiretvComponent,
    EbookComponent,
    AudiobookComponent,
    AmazonvideoComponent,
    AmazonmusicComponent,
    MobileoptionComponent,
    TvComponent,
    AmazonpayComponent,
    PrimeComponent,
    BestsellerComponent,
    CustomerserviceComponent,
    MobileComponent,
    SignpopupComponent,
    LangComponent,
    MobileaccessoriesComponent,
    LaptopaccessoriesComponent,
    TvHomeComponent,
    AudioComponent,
    CameraComponent,
    ComputerperipheralsComponent,
    SmarttechnologyComponent,
    MusicalinstrumentComponent,
    StationaryofficeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
