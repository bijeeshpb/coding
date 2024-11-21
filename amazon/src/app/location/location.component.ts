import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  constructor(public close:MatDialogRef<LocationComponent>)
  {}
   
  closepop(){
    this.close.close();

  }

}
