import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MobileaccessoriesComponent } from '../mobileaccessories/mobileaccessories.component';
import { LaptopaccessoriesComponent } from '../laptopaccessories/laptopaccessories.component';
import { TvHomeComponent } from '../tv-home/tv-home.component';
import { AudioComponent } from '../audio/audio.component';
import { CameraComponent } from '../camera/camera.component';
import { ComputerperipheralsComponent } from '../computerperipherals/computerperipherals.component';
import { SmarttechnologyComponent } from '../smarttechnology/smarttechnology.component';
import { MusicalinstrumentComponent } from '../musicalinstrument/musicalinstrument.component';
import { StationaryofficeComponent } from '../stationaryoffice/stationaryoffice.component';


@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent {
  constructor(private dialog:MatDialog){}

  mob(){
    this.dialog.open(MobileaccessoriesComponent,{
      width:'100%',
      height:'500px',
      panelClass: 'mob',
      
    });
  }
  lap(){
    this.dialog.open(LaptopaccessoriesComponent,{
      width:'100%',
      height:'500px',
      panelClass: 'lap',
    });
  }
  tv(){
    this.dialog.open(TvHomeComponent,{
      width:'100%',
      height:'500px',
      panelClass: 'tv',
      
    });
  }
  audio(){
    this.dialog.open(AudioComponent,{
      width:'100%',
      height:'500px',
      panelClass: 'audio',
      
    });
  }
  camera(){
    this.dialog.open(CameraComponent,{
      width:'100%',
      height:'500px',
      panelClass: 'camera',
      
    });
  }
  computer(){
    this.dialog.open(ComputerperipheralsComponent,{
      width:'100%',
      height:'500px',
      panelClass: 'computer',
      
    });
  }
  smarttech(){
    this.dialog.open(SmarttechnologyComponent,{
      width:'100%',
      height:'500px',
      panelClass: 'smart',
      
    });
  }
  music(){
    this.dialog.open(MusicalinstrumentComponent,{
      width:'100%',
      height:'500px',
      panelClass: 'music',
      
    });
  }
  station(){
    this.dialog.open(StationaryofficeComponent,{
      width:'100%',
      height:'500px',
      panelClass: 'station',
      
    });
  }

}
