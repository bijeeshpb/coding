import { Component } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  displayalexa:boolean=false
  displayfiretv:boolean=false
  displaykindle:boolean=false
  displayaudiobook:boolean=false
  displayamazonvideo:boolean=false
  displayamazonmusic:boolean=false
  displaymobile:boolean=false
  displaytv:boolean=false

  showalexa(){
    this.displayalexa=true
  }
  close(){
    this.displayalexa=false
  }
  openfiretv(){
    this.displayfiretv=true
  }
  closefiretv(){
    this.displayfiretv=false
  }
  openkindle(){
    this.displaykindle=true
  }
  closekindle(){
    this.displaykindle=false
  }
  openaudiobook(){
    this.displayaudiobook=true
  }
  closeaudiobook(){
    this.displayaudiobook=false
  }
  openamazonvideo(){
    this.displayamazonvideo=true
  }
  closeamazonvideo(){
    this.displayamazonvideo=false
  }
  openamazonmusic(){
    this.displayamazonmusic=true
  }
  closeamazonmusic(){
    this.displayamazonmusic=false
  }
  openmobile(){
    this.displaymobile=true
  }
  closemobile(){
    this.displaymobile=false
  }
  opentv(){
    this.displaytv=true
  }
  closetv(){
    this.displaytv=false
  }


}
