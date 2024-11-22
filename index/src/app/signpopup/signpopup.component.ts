import { Component ,EventEmitter,Output} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signpopup',
  templateUrl: './signpopup.component.html',
  styleUrls: ['./signpopup.component.css']
})
export class SignpopupComponent {
   
  constructor(public close:MatDialogRef<SignpopupComponent>)
  {}
   
  closepop(){
    this.close.close();

  }
 

}
