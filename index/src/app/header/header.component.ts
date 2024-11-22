import { Component ,OnInit,AfterViewInit,ViewChild} from '@angular/core';
import { SignpopupComponent } from '../signpopup/signpopup.component';
import { MatDialog } from '@angular/material/dialog';
import { LocationComponent } from '../location/location.component';
import { LangComponent } from '../lang/lang.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
    
  @ViewChild(LangComponent)langcomponent!:LangComponent;
  
  

  mxplayer(){
    window.open('https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav','_blank')
  }
  constructor(private dialog:MatDialog)
  {}
  


  popup(){
    this.dialog.open(SignpopupComponent,{
      width:'500px',
      height:'500px',
      panelClass: 'custom-overlay',

    });
  }
  locationpopup(){
    this.dialog.open(LocationComponent,{
      width:'300px',
      height:'300px',
      

    });
  }

  langpopup(){
    this.dialog.open(LangComponent,{
      width:'300px',
      height:'500px',
      panelClass: 'lang',

    });
  }
  
}
